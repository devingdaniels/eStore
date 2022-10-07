import React, {useState} from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";


function SelectQuantity(){
    const [state, setQuantity, ] = useState({quantity: 0, totalItems: 0})
    
    const increment = () => setQuantity(() => {
        if (state.quantity === 10){
            setQuantity({...state, quantity: 10})
            
        }else {
            setQuantity(state => ({...state, quantity: state.quantity + 1}))
        }
    })
    
     const decrement = () => setQuantity(state.quantity === 10 ? 0 : state.quantity - 1)
    return (
        <>
            <AiFillMinusCircle onClick={decrement}/>
            <AiFillPlusCircle onClick={increment}/>
            <span>{state.quantity}</span>             
        </>
    )    
}

export default SelectQuantity