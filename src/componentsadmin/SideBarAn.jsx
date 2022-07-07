import './SideBarAn.css'
// import React,{useEffect,useState} from 'react';


function SideBarAn(props) {

    // const [showSideBar, setshowSideBar] = useState(props.display);


    // useEffect(() => {
    
      
    // }, [props])
    

    return ( 
    <div id='SideBar' style={{display:props.display}} >
        <span id='hide-sidebar-icon' onClick={()=>{document.querySelector('#hide-Sidebar').click()}} >
        <i className="bi bi-forward"   ></i>
        </span>
        <ul className='ulcol34' >
            <li>Products</li>
            <li>Orders</li>
            <li>Settings</li>
            <li>Users</li>
        </ul>
    </div> );
}

export default SideBarAn;