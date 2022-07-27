import './ProductDetailsRow.css'
import { Link } from 'react-router-dom';


function ProductDetailsRow(props) {
    return ( 
    <>
    <div className="Prdtct-details-row" >
        <span>{props.id}</span>
        <span>{props.name}</span>
        <span>&#8377;{props.offer_price}</span>
        <span>{props.stocked || 0}</span>
        <Link to={`/admin_dashboard/products/product=${props.id}`} className="edit-data" ><i class="bi bi-pencil-square"></i></Link>

    </div> 
    </>
    );
}

export default ProductDetailsRow;