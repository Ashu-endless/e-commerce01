/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css'
import {Link, NavLink} from "react-router-dom"
import { ShopName } from '../SiteSettings';
import SearchBar from './SearchBar';
function Header() {
    // var navList = document.getElementById("nav-lists");
function Show() {
    document.getElementById("nav-lists").classList.add("_Menus-show");
}

function Hide(){
    document.getElementById("nav-lists").classList.remove("_Menus-show");
}

function IsCartinit(){
    if (localStorage.getItem('cart-items') === null){
        return false
    }
    return true
}

const cartitemLength = IsCartinit() ? localStorage.getItem('cart-items').split(',').length : 0;

    return ( <>
        <div className="nav-container">
    <div className="logo">
        <Link to="/e-commerce01"><p id="Store-title-nav" ><span>{ShopName}</span></p></Link>
    </div>
<div className="navbar">

<div className="icon-bar" onClick={Show}>
    <i></i>
    <i></i>
    <i></i>
</div>

<ul id="nav-lists">
    <li className="close"><span onClick={Hide}><i className="bi bi-forward"></i></span></li>
    <li><NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to="/e-commerce01">Home</NavLink></li>
    <li><NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"} to="/about_us">connect</NavLink></li>
    {/* <li><NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"} to="/contact_us">Contact</NavLink></li> */}
{/* <div id='desktop-searchdiv' className='search-div3410' ><input type="text" placeholder='Search product' name="" id="" /> <span> <i class="bi bi-search"></i></span> </div>  */}
    <SearchBar styleattr="desktop-searchdiv" />
    {/* <ul> */}
<li><NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to="/ss">Login</NavLink></li>
<li><NavLink id='cartli' icon="shopping-cart" className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to="/my_cart"><span className='notif-small' id='Shopping-cart-Content'>{cartitemLength}</span></NavLink></li>
{/* localStorage.getItem("cartitems").split(",").length   */}
{/* </ul> */}
</ul>


</div>
</div>
    </> );
}

export default Header;