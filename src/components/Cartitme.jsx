import './Cartitem.css'

function Cartitem(props) {
    return ( <>
    <div className='cart-item' >
        <div  className='left' style={{backgroundImage:`url(${props.image})`}} ></div>
        <div className='right' >
            <span>{props.name}</span><span>{props.details}</span>
            <b>{props.offer_price}</b>
            <strike>{props.original_price}</strike>
            <span>save R {parseInt(props.original_price)-parseInt(props.offer_price)}</span>
        </div>
    </div>
    </> );
}

export default Cartitem;