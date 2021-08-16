import react from "react";
import "./header.css"
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function Headers(){
    return(
        <div className="header">
            <nav className="nav__bar">
                <div className="content">
                    
                    <span className="shop">shop</span>
                    
                    <span className="life">life</span>
                    <span className="macarthur__square">Macarthur Square</span>
                    <Link to="/profile">
                    <span className="my__profile">MY PROFILE</span>
                    </Link>
                    <Link to="/shops">
                    <span className="shops">SHOPS</span>
                    </Link>
                    <Link to="/faqs">
                    <span className="FAQS">FA</span>
                    </Link>
                    <Link to="cart">
                    <AddShoppingCartIcon className="icon"/>
                    <span className="cart">cart</span>
                    </Link>
                    </div>
            </nav>
        
        </div>
    )
}
export default Headers;