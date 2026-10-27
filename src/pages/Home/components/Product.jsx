import ProductCard from './ProdactCard'
import './Product.css'


function Product(){

    const products = [
    {name: "apple watch", price:1000, quantity:2},
    {name: "head phone", price:2000, quantity:10},
    {name: "sneakers", price:700, quantity:2}
]
    return(

        
        <section className='productsSection'>
            <h3>Our Products</h3>
            <p className='paragProd'>Manage your cart by adjisting quantities or removing items.</p>
            <div className='productsContainer'>
                {products.map((product) => (
                <ProductCard 
                name = {product.name}
                price = {product.price}
                quantity = {product.quantity} 
                />
            ))}
            </div>
            
        </section>
       
       
    )
}
export default Product;