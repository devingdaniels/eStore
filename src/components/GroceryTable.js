import React from "react";
import GroceryRow from './GroceryRow'


function GroceryTable({items}){
    return (
        <>
            <h1>Groceries</h1>
            <table>
                <caption>Add items to your cart here</caption>
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