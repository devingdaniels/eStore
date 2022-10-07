import React from "react";
import GroceryTable from "../components/GroceryTable"


function OrderPage({items}){
    return (
        <>
            <h1>This is some h1 about making an order</h1>
            <p>A paragraph to add some content to</p>
            <GroceryTable items={items}/>
        </>
    )
}


export default OrderPage