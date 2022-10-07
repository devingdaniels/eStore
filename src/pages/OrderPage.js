import React from "react";
import GroceryTable from "../components/GroceryTable"

function OrderPage({items}){
    return (
        <>
            <h1>Welcome to the Order Page</h1>
            <p>Adjust quantities for the items you need</p>
            <GroceryTable items={items}/>
        </>
    )
}

export default OrderPage