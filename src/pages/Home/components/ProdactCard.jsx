import './ProductCard.css'


function ProductCard(prd){

  
    return(
        <div className='containerProduct'>
            <h3> {prd.name} </h3>
            <p> {prd.price} </p>
            <p> {prd.quantity} </p>
        </div>
    )
}
export default ProductCard;