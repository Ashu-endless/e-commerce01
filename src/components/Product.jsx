import { Link } from 'react-router-dom';
import './Product.css'

function Product(props) {

    function IsInCart(data){
        if (localStorage.getItem('cart-items').split(',').includes(`${data.id}`) ){
            return true
        }else{
            return false
        }
    }

    function AddToCart(e){
        e.target.innerText = "View Cart";
        if(localStorage.getItem("cart-items") == null){
            // console.log(localStorage.getItem("id"))
            localStorage.setItem('cart-items',e.target.getAttribute('product_id'))
        }else{
            localStorage.setItem('cart-items',`${localStorage.getItem("cart-items")},${e.target.getAttribute('product_id')}`)
        }

        document.querySelector("#Shopping-cart-Content").innerText = parseInt(document.querySelector("#Shopping-cart-Content").innerText) + 1
    }

    return ( <>
    <div className="product"  >
        {/* <img   src={props.image} alt="" /> */}
        <div className='image' style={{backgroundImage:`url(${props.image})`}} ></div>
        <div className="about" > <b>{props.name}</b> <span>{props.detail}</span> </div>
        <div className="price" > <b>&#8377;{props.offer_price || props.original_price}</b> <strike>&#8377;{props.original_price}</strike> <span>20% off</span>   </div>
        {IsInCart(props)? <Link to={'/my_cart'} className='btn-viewcart' product_id={props.id}  >View Cart</Link> :
        <button className='btn-addtocart' product_id={props.id} onClick={AddToCart} >Add to Cart</button>}
    </div>
    </> );
}

export default Product;