import React, { useState } from "react";

function ZipSearch( {stores }){
    const [zipCode, setZipCode] = useState('')
    return (
        <form action="" method="">
            <fieldset>
                <legend>Zip Search</legend>
                <label htmlFor="zip"></label>
                <div className="zipSearchContainer">
                <input type="text" id="zip" value={zipCode} name="zipCode" placeholder="97506" size="5" maxLength="5" onChange={e => setZipCode(e.target.value)}></input>
                <label htmlFor="zipAlert">
                    <button className="searchZipButton" id="zipAlert" name="zipAlert" 
                    onClick={ (e) => {handleSubmit(e,stores, zipCode)}}>Submit
                    </button>
                </label>
                </div>
            </fieldset>
        </form>
    )
}

function handleSubmit(e, stores,zipCode ){
 // Check if the user zipCode is in the stores object
    const result = isInStores(stores, zipCode)
     if (result === true){
        alert(`Your zip code, ${zipCode}, is within the order range! :)`)
        }else {
             alert(`Your zip code, ${zipCode}, is outside the order range! :(`)
        }
    e.preventDefault()
}

function isInStores(stores, zip){
    for(const store of stores){        
        if (store.zipCode === Number(zip)) {
            return true
          }    
    }    
    return false
}



export default ZipSearch