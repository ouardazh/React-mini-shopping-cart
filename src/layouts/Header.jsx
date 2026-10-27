import './Header.css'
import { Link } from 'react-router-dom';
function Header(){
    return(
        <header>
            <div className='logo'>
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Shop<span>React</span></p>
            </div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                {/* <a href="">Home</a>
                <a href="">About</a> */}
            </nav>

            <i class="fa-solid fa-cart-shopping"></i>
        </header>
    )

}
export default Header;