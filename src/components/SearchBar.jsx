import { useNavigate } from "react-router-dom";
import React,{useState} from "react";
import './SearchBar.css'

function SearchBar(props) {
    const [searchvalue,setsearchvalue] = useState()
    const navigate = useNavigate()
    function OnEnter(e){
        if(e.key === 'Enter') {
            navigate(`/search=${e.target.value}`)       
        }
    
    }
    // !
    function Search(){
        // navigate(`/search=${e.targetdocument.querySelector('#mobile-searchdiv > input').value}`)       
        navigate(`/search=${searchvalue}`)       
        
    }
    return ( <>
<div id="mobile-searchdiv"  styleattr={props.styleattr}  onKeyDown={OnEnter} className='search-div3410'  ><input onInput={(e)=>{setsearchvalue(e.target.value)}} list="products" onSubmit={(e)=>{navigate(`/search=${e.target.value}`)}} placeholder='Search product' name="" id="" /> <span onClick={Search}  ><span className="search-icon" >  <i class="bi bi-search"></i></span></span>
<datalist id="products" >
            <option value="ss"/>
            <option value="sasa"/>
            <option value="sassa"/>
        </datalist>
 </div> 
        
    </> );
}

export default SearchBar;