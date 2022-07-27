import { useParams } from 'react-router-dom';
import { ProductArr } from '../components/data';
import {Link} from 'react-router-dom'

import './ViewProduct.css'

function ViewProduct() {
    const params = useParams()
    const product_details = ProductArr[params.slug]
    return ( <>
				<div class="adminviewproduct row">
                <span className='actiontop'>
                    <Link to={'/admin_dashboard/products'} ><i class="bi bi-arrow-left"></i></Link>
                
                <div className='random-2-btn' >
                    <button className='edit' ><i class="bi bi-pencil-square"></i> <span>Edit</span> </button>
                    <button className='delete' ><i class="bi bi-trash"></i> <span>Delete</span></button>

                </div>
                </span>
                    <div className="wrapper">
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
						{/* <h4 class="price">current price: <span>&#8377;{product_details.offer_price}</span> <strike>&#8377;{product_details.original_price}</strike> </h4> */}
						{/* <ul>
							<li>{product_details.subdetails[0] || ""}</li>
							<li>{product_details.subdetails[1] || ""}</li>
						</ul> */}

						<div>
						<div>product id : <span>{product_details.id}</span> </div>
						<div>offer price : &#8377;<span>{product_details.offer_price}</span> </div>
						<div>selling price : &#8377;<span>{product_details.original_price}</span> </div>
						<div>stocked : <span>{product_details.stocked}</span> </div>
						</div>
						

					</div>
                    </div>

	</div>
    </> );
}
export default ViewProduct;