import './Cartitem.css'

function Cartitem(props) {
    return ( <>
    <div className='cart-item' >
        <div  className='left' style={{backgroundImage:`url(${props.image})`}} ></div>
        <div className='right' >
            <b>{props.name} {props.detail}</b>
            {/* <span>{props.detail}</span> */}
            <div className='grdclm' >
            <b>&#8377;{props.offer_price}</b>
            <strike>&#8377;{props.original_price}</strike>
            <span>save &#8377; {parseInt(props.original_price)-parseInt(props.offer_price)}</span>
            </div>
            <ul>
                <li>Info 1</li>
                <li>Info 2</li>
                <li>Info 2</li>
            </ul>
            <div className='quantity' > <label htmlFor="">Quantity : </label> <input defaultValue={1} type="number" /></div>

            <div>Total price :<b>&#8377;{props.offer_price}</b><b>* 2 = </b><b>&#8377;1600</b>  </div>

            <button style={{color:"red"}} >remove from cart</button>
        </div>
    </div>
    </> );
}

export default Cartitem;