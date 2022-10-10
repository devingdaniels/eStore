import React from "react";
import GroceryTable from "../components/GroceryTable"

function OrderPage({items}){
    return (
        <>
            <h2>Welcome to the Order Page</h2>
            <p>Adjust quantities for the items you need</p>
            <GroceryTable items={items}/>
        </>
    )
}

export default OrderPage