import "./OrderSection.css";
import Order from "../componentsadmin/Order";
import { OrdersArr } from "../components/data";
function OrderSection() {


  const orders = OrdersArr.map((order)=>
  {return <Order key={order.s_no} {...order} ></Order> })

  return (
    <>
      <div className="admin_sections">
        <p className="admnsectitle">Orders</p>
        <div className="divdsectionin2">
          <span>All orders</span> <span>Pending</span> <span>Completed</span>{" "}
        </div>
        <div className="fwsearchbar">
          <i className="bi bi-search"></i>
          <input type="text" name="" id="" placeholder="search orders" />
        </div>

        <div>
          <div className="tblehead" >
            <span>S.no</span>
            <span>Customer Name</span>
            <span>Order time</span>
            <span>Cart</span>
            <span>Cart</span>
          </div>


          <div>
          {orders}

          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSection;
