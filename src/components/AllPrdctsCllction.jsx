import Product from "./Product";
import {ProductArr} from "./data";
import './AllPrdctsCllction.css'

function AllPrdctsCllction() {

    const Products = ProductArr.map((ProductJson) =>
  <Product key={ProductJson.id} {...ProductJson}  />
);


    return ( <>
    <div id="All-Products-Div" >
       { Products}
    </div>
    </> );
}

export default AllPrdctsCllction;