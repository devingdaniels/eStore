import React from "react";
import StoreRow from '../components/StoreRow'

function StoreTable({stores}){
    return (
        <>
            <table>
                <caption>Available Stores</caption>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>                        
                    </tr>
                </thead>
                <tbody>
                    {stores.map((store, i)=> <StoreRow store={store} key={i}/>)}
                </tbody>
            </table>
        </>
    )
}

export default StoreTable