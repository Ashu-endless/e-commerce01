import Banner from "../components/Banner";
import AllPrdctsCllction from "../components/AllPrdctsCllction";

function Home() {
    return ( <>

    <Banner/>
<div id="mobile-searchdiv" className='search-div3410'  ><input type="text" placeholder='Search product' name="" id="" /> <span className="search-icon" > <i class="bi bi-search"></i></span> </div> 

    <AllPrdctsCllction/>
    </> );
}

export default Home;