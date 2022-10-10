import React, {useState} from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

function SelectQuantity({total,getQuantity}){
    const [quantity, setQuantity, ] = useState(0)
    
    const increment = () => {
        if (quantity === 10){
            setQuantity(10)            
        }else {
            setQuantity(quantity + 1)
            total(true)
            getQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity === 0){
            setQuantity(0)            
        }else {
            setQuantity(quantity - 1 )
            total(false)
            getQuantity(quantity - 1)
        }
    }
    return (        
        <div className="updateQuantityContainer">
            <AiFillMinusCircle className="updateQuantButton" onClick={decrement}/>
            <AiFillPlusCircle className="updateQuantButton" onClick={increment}/>
        </div>             
    )    
}


export default SelectQuantity