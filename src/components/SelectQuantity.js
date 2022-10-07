import React, {useState} from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";


// Before refactoring, this was set up to handle two props in state
// Code could be simpler, but this is to remind for how to handle objects in state 

function SelectQuantity(){
    const [state, setQuantity, ] = useState({quantity: 0})
    
    const increment = () => {
        if (state.quantity === 10){
            setQuantity({...state, quantity: 10})
            
        }else {
            setQuantity(state => ({...state, quantity: state.quantity + 1}))
        }
    }

    const decrement = () => {
        if (state.quantity === 0){
            setQuantity({...state, quantity: 0})
            
        }else {
            setQuantity(state => ({...state, quantity: state.quantity - 1}))
        }
    }

    return (
        <>
            <AiFillMinusCircle onClick={decrement}/>
            <AiFillPlusCircle onClick={increment}/>
            <span>{state.quantity}</span>          
        </>
    )    
}

export default SelectQuantity