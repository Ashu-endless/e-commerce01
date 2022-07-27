import Banner from "../components/Banner";
// import AllPrdctsCllction from "../components/AllPrdctsCllction";
import ItemSlider from "../components/ItemSlider";
import './Home.css'
function Home() {
    return ( <>

    <div id="Explore" >

    <Banner/>
    <ItemSlider title="Top-Trending" />
    <ItemSlider title="Best-selling" />
    </div>
    {/* <Footer/> */}
    </> );
}

export default Home;