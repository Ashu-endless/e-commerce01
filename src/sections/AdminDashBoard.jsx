import React,{useState} from "react";
import './AdminDashBoard.css'
import SideBarAn from "../componentsadmin/SideBarAn";
import OrderSection from "../adminsections/OrderSection";
import { Routes,Route } from "react-router-dom";
import ProductsAn from "../adminsections/ProductsAn";
import Settings from "../adminsections/Settings";

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

        <Routes>

        <Route path={"/products/*"} element={<ProductsAn/>} ></Route>
        <Route path={"/orders"} element={<OrderSection/>} ></Route>
        <Route path={"/feedbacks"} element={<OrderSection/>} ></Route>
        <Route path={"/users"} element={<OrderSection/>} ></Route>
        <Route path={"/settings"} element={<Settings/>} ></Route>

        </Routes>

        
        <SideBarAn display={showSideBar} />
    </> );
}

export default AdminDashBoard;