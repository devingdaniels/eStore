import React from "react";
import {Link} from 'react-router-dom'


function Navigation(){
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="../storePage">Stores</Link>
            <Link to="../orderPage">Order</Link>
        </nav>
    )
}

export default Navigation