import { Link } from 'react-router-dom';
import './Product.css'

function Product(props) {

    

    

    return ( <>
    <Link to={`/view_product=${props.id}`} className="product"  >
        {/* <img   src={props.image} alt="" /> */}
        <div className='image' style={{backgroundImage:`url(${props.image})`}} ></div>
        <div className="about" > <b>{props.name}</b> <span>{props.detail}</span> </div>
        <div className="price" > <b>&#8377;{props.offer_price || props.original_price}</b> <strike>&#8377;{props.original_price}</strike> <span>20% off</span>   </div>
        {/* {IsInCart(props)? <Link to={'/my_cart'} className='btn-viewcart' product_id={props.id}  >View Cart</Link> :
        <button className='btn-addtocart' product_id={props.id} onClick={AddToCart} >Add to Cart</button>} */}
    </Link>
    </> );
}

export default Product;