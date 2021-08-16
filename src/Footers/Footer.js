import react from "react"
import "./footer.css"
function Footer() {
    return (
        <footer className="footer">
        
            <div className="main"> 
                <span className="wraper1">
                    <p className="p1">Help</p>
                    <p className="p1">My Account</p>
                    <p className="p1">Track my Order</p>
                    <p className="p1">Contact my Stylelist</p>
                    <p className="p1">Delivery and return</p>
                    <p className="p1">cancel my subscription</p>
                </span>
                {/* <span className="wraper2">
                    <p className="p2">About shopelife</p>
                    <p className="p2">Privacy</p>
                    <p className="p2">Cookies</p>
                    <p className="p2">T&Cs</p>
                </span> */}
            </div>
        </footer>
    )
}
export default Footer;