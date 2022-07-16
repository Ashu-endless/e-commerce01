import './ProductDetailsRow.css'

function ProductDetailsRow(props) {
    return ( 
    <>
    <div className="Prdtct-details-row" >
        <span>{props.name}</span>
        <span>{props.offer_price}</span>
        <span>{props.stocked || 0}</span>
        <span className="edit-data" ><i class="bi bi-pencil-square"></i></span>

    </div> 
    </>
    );
}

export default ProductDetailsRow;