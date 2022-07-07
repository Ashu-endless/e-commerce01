import React,{useState} from "react";
import './AdminDashBoard.css'
import SideBarAn from "../componentsadmin/SideBarAn";
function AdminDashBoard() {
    const [showSideBar, setshowSideBar] = useState("none");
    return ( <>
    <nav>
            <p id='App-title' >Site Admin Panel</p>
            
            <div id="Navbar-rightside">
                <div onClick={()=>{setshowSideBar("grid")}}  id="profile-svg"></div>
                <span id="hide-Sidebar" onClick={()=>{setshowSideBar("none")}}  hidden="True"></span>
            </div>
        </nav>

        <SideBarAn display={showSideBar} />
    </> );
}

export default AdminDashBoard;