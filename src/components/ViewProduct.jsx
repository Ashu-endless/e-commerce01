/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useParams,Link } from 'react-router-dom';
import { ProductArr } from './data';
import './ViewProduct.css'
function ViewProduct() {
    const params = useParams()
    const product_details = ProductArr[params.slug]

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
	function IsInCart(data){
        

        try {
            if (localStorage.getItem('cart-items').split(',').includes(`${data.id}`) ){
                return true
            }else{
                return false
            }
            
        } catch (error) {
            return false
            
        }

        
    }


    return ( <>
    <div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						<img src={product_details.image} alt="" />
						
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{product_details.name}</h3>
						{/* <div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div> */}
						<p class="product-description">{product_details.detail}</p>
						<h4 class="price">current price: <span>&#8377;{product_details.offer_price}</span> <strike>&#8377;{product_details.original_price}</strike> </h4>
						{/* <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 class="sizes">sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 class="colors">colors:
							<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span class="color green"></span>
							<span class="color blue"></span>
						</h5> */}
						<div class="action">
							{IsInCart(product_details) ? <Link to={'/my_cart'}  product_id={product_details.id}  class="add-to-cart btn btn-default" type="button">View cart</Link>:
							<button product_id={product_details.id} onClick={AddToCart} class="add-to-cart btn btn-default" type="button">add to cart</button>}
							<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </> );
}

export default ViewProduct;