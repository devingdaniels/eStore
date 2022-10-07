import React, { useState } from "react";

function ZipSearch(){
    const [zipCode, setZipCode] = useState('')
    return (
        <form action="" method="">
            <fieldset>
                <legend>Enter your zip code</legend>
                <label for="zip"></label>
                <input type="text" id="zip" value={zipCode} name="zipCode" placeholder="97506" size="5" maxLength="5" onChange={e => setZipCode(e.target.value)}></input>
                <label for="zipAlert">
                    <button name="zipAlert" onClick={ e=> 
                        {alert(`Your zip code: ${zipCode}`)
                        e.preventDefault()}}>Submit
                    </button>
                </label>
            </fieldset>
        </form>
    )
}
export default ZipSearch