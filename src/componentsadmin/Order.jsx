import './Order.css'
function Order(props) {
    return ( <>
    <div> 
        <span>{props.id}</span>
        <span>{props.by}</span>
        <span>{props.time}</span>
        <span>{props.time}</span>
    </div>
    
    </> );
}

export default Order;