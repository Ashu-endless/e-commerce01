import './ProductAn.css'

function ProductsAn() {
    return ( 
    <>
    <div className="admin_sections" >

    <div className="admnsectitle" >Products</div>

        <div className='slctbtnbtn' >
            <select name="" id="">
                <option value="">All</option>
                <option value="">Snacks</option>
            </select>

            <span className="bluewhtbtn"><i class="bi bi-plus"></i>Add Product</span>
            <span className="bluewhtbtn"><i class="bi bi-plus"></i>Add Category</span>

        </div>
        <div className="fwsearchbar">
          <i className="bi bi-search"></i>
          <input type="text" name="" id="" placeholder="search orders" />
        </div>

    </div>
    
    </>
     );
}

export default ProductsAn;