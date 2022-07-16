import './ProductAn.css'
import ProductDetailsRow from './ProductDetailsRow';
import { ProductArr } from '../components/data';
import {Link,Route,Routes} from 'react-router-dom'
import AddProduct from '../componentsadmin/AddProduct';

function ProductsAn() {

    const ProductRow = ProductArr.map((product)=>
        <ProductDetailsRow {...product} />
    )

    return ( 
    <>
    <div className="admin_sections" >

    <div className="admnsectitle" >Products</div>

        <div className='slctbtnbtn' >
            <select name="" id="">
                <option value="">All</option>
                <option value="">Snacks</option>
            </select>
            <div className='grdend' >

            <Link to={'/admin_dashboard/products/add_product'} className="bluewhtbtn"><i class="bi bi-plus"></i>Add Product</Link>
            <span className="bluewhtbtn"><i class="bi bi-plus"></i>Add Category</span>
            </div>

        </div>
        <div className="fwsearchbar">
          <i className="bi bi-search"></i>
          <input type="text" name="" id="" placeholder="search orders" />
        </div>

        <div className='PrdctTable-head tblehead' >
            <span>Product</span>
            <span>Selling Price</span>
            <span>In Stocks</span>
        </div>

        <div className='Prdtct-details-table-cont ' >
            {ProductRow}
        </div>


        <Routes>
            <Route path={"/add_product"} element={<AddProduct/>} />
        </Routes>

    </div>
    
    </>
     );
}

export default ProductsAn;