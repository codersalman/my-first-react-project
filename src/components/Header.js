import Nav from "./Nav";
import logo from '../logo.svg'
import "./Header.css"
function Header() {

    return(
        <div className="main-header">
<div className="header-items">
    <h2 className="logo-name">First React Web Page</h2>
</div>
            <Nav/>
        </div>

    );

}
export default Header;