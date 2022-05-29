import './Nav.css'
import  logo from '../logo.svg';
function Nav() {
    return(
        <div className="nav-main">
            <nav className="nav">
                <li className="nav-items"><a href="#">HOME</a> </li>
                <li className="nav-items"><a href="#">MENU</a> </li>
                <li className="nav-items"><a href="#">ABOUT US</a> </li>
                <li className="nav-items"><a href="#">CONTACT US</a> </li>
                <button className="nav-but">Learn More</button>
           </nav>
        </div>
    );
}

export default Nav;