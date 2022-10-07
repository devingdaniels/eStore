import React, { useState } from "react";

function ZipSearch( {stores }){
    const [zipCode, setZipCode] = useState('')
    return (
        <form action="" method="">
            <fieldset>
                <legend>Enter your zip code</legend>
                <label htmlFor="zip"></label>
                <input type="text" id="zip" value={zipCode} name="zipCode" placeholder="97506" size="5" maxLength="5" onChange={e => setZipCode(e.target.value)}></input>
                <label htmlFor="zipAlert">
                    <button id="zipAlert" name="zipAlert" onClick={ e=>                         
                        {
                            // Check if the user zipCode is in the stores object
                            const result = isInStores(stores, zipCode)
                            if (result === true){
                                alert(`Your zip code, ${zipCode}, is within the order range! :)`)
                            }else {
                                alert(`Your zip code, ${zipCode}, is outside the order range! :(`)
                            }
                            
                            e.preventDefault()
                        }}>Submit
                    </button>
                </label>
            </fieldset>
        </form>
    )
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