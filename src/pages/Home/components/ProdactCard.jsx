import './ProductCard.css'
import { useState } from 'react';


function ProductCard(prd){
    const [count, setCount] = useState(0)
  
    return(
        <div className='containerProduct'>
            <img src={prd.image} alt="" />
            <h3> {prd.name} </h3>
            <p> {prd.price} MAD </p>
            <p> Quantity: {prd.quantity} </p>
           <div className='containerCount'>
              <button className='countBtn' onClick={() => setCount(count+1)}>+</button>
               <p className='countparag'> {count} </p>
               <button className='countBtn' onClick={() => setCount(count-1)}>-</button>
           </div>
           <button className='deleteBtn' onClick={() => prd.onDelete(prd.name)}>Delete</button>

            
        </div>
    )
}
export default ProductCard;