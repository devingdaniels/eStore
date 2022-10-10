import React, {useState} from "react";
import SelectQuantity from './SelectQuantity'


function GroceryRow({item, total}){
    const [quantity, setQuantity] = useState(0)
    const getQuantity = (value) => {setQuantity(value)}

    return (
        <tr>
            <td className="tableNameItem">{item.name}</td>
            <td>{item.price}</td>
            <td><SelectQuantity item={item} total={total} getQuantity={getQuantity}/></td> 
            <td>{quantity}</td>
        </tr>
    )
}

export default GroceryRow