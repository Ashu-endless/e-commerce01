import './Product.css'

function Product(props) {
    return ( <>
    <div className="product" >
        {/* <img   src={props.product_image} alt="" /> */}
        <div className='image' style={{backgroundImage:`url(${props.product_image})`}} ></div>
        <div className="about" > <b>{props.name}</b> <span>{props.detail}</span> </div>
        <div className="price" > <b>&#8377;{props.offer_price || props.original_price}</b> <strike>&#8377;{props.original_price}</strike> <span>20% off</span>   </div>
        <button className='btn-addtocart' onClick={(e)=>{console.log(e)}} >Add to Cart</button>
    </div>
    </> );
}

export default Product;