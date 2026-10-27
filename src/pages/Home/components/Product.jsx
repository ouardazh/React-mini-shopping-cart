import ProductCard from './ProdactCard'
import './Product.css'
import { useState } from 'react'
import applewatch from '../../../assets/img/img2.jpg'
import headphone from '../../../assets/img/headphone.jfif'
import sneaker from '../../../assets/img/sneakers.jfif'


function Product(){

   
     const [products, setProducts] = useState([
    {name: "apple watch", price:1000, quantity:2, image: applewatch},
    {name: "head phone", price:2000, quantity:10, image:headphone},
    {name: "sneakers", price:700, quantity:2, image:sneaker}
])
    function Delete(name){
        setProducts(products.filter((p) => p.name !== name));
            
        }
    
    return(

        
        <section className='productsSection'>
            <h3>Our Products</h3>
            <p className='paragProd'>Manage your cart by adjisting quantities or removing items.</p>
            <div className='productsContainer'>
                {products.map((product) => (
                <ProductCard 
                image = {product.image}
                name = {product.name}
                price = {product.price}
                quantity = {product.quantity} 
                onDelete = {Delete}
                />
            ))}
            
            
            </div>
            
        </section>
       
       
    )
}
export default Product;