import React from "react";
import GroceryRow from './GroceryRow'

function GroceryTable({items}){
    return (
        <>
            <h1>This is where the grocery table will go</h1>
            <table>
                <caption>This is a table</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th> 
                        <th>Quantity</th>                        
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i)=> <GroceryRow item={item} key={i}/>)}
                </tbody>
            </table>
        </>
    )
}

export default GroceryTable