import './Order.css'
function Order(props) {
    console.log(props)
    return ( <>
    <div> 
        <span>{props.s_no}</span>
        <span>{props.by}</span>
        <span>{props.time}</span>
        <span>{props.time}</span>
    </div>
    
    </> );
}

export default Order;