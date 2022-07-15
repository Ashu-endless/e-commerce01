import './SideBarAn.css'
import { NavLink } from 'react-router-dom';
// import React,{useEffect,useState} from 'react';


function SideBarAn(props) {

    // const [showSideBar, setshowSideBar] = useState(props.display);


    // useEffect(() => {
    
      
    // }, [props])
    

    return ( 
    <div id='SideBar' style={{display:props.display}} >
        <div id='header' >
        <span id='hide-sidebar-icon' onClick={()=>{document.querySelector('#hide-Sidebar').click()}} >
        <i className="bi bi-forward"   ></i>
        </span> <b>DashBoard</b>
        </div>
        
        <ul className='ulcol34' >
            <NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to={'/admin_dashboard/products'} ><i className="bi bi-cart4"></i><span><span>Products</span></span></NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"} to={'/admin_dashboard/orders'} ><i className="bi bi-bell"></i><span>Orders</span></NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to={'/admin_dashboard/users'} ><i className="bi bi-people"></i><span>Users</span></NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to={'/admin_dashboard/settings'} > <i className="bi bi-gear-wide"></i> <span>Settings</span> </NavLink>
        </ul>
    </div> );
}

export default SideBarAn;