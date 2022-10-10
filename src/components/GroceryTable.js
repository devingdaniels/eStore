import React, {useState} from "react";
// Components
import GroceryRow from './GroceryRow'
import Totals from "./Totals";


function GroceryTable({items}){
    // use state total and update total 
    const [totalItems, updateTotal, ] = useState(0)
    // Value returns a bool
    const  updateTotalItems =  (value) => {value ? updateTotal(totalItems + 1) : updateTotal(totalItems - 1)}

    return (
        <>
            <h1>Groceries</h1>            
            <table>
                <caption>Select Items</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th> 
                        <th>Quantity</th> 
                        <th>Total</th>                        
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i)=> <GroceryRow item={item} total={updateTotalItems} key={i}/>)}
                </tbody>   
            </table>
            <Totals total={totalItems}/>
        </>
    )
}

export default GroceryTable