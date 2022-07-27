import { Link } from "react-router-dom";
import "./ShoppingCart.css";
import { ProductArr } from "../components/data";
import Cartitem from "../components/Cartitme";
import React from "react";
function ShoppingCart() {
  var onlycartproducts = [];
  function IsCartEmpty(){
    if(IsCartinit() === true){
        if (localStorage.getItem('cart-items') !== ""){
            return false
        }
    }
    return true
  }

  function IsCartinit(){
    if (localStorage.getItem('cart-items') === null){
        return false
    }
    return true
}

function removeFromCart(){
    
}
//   const [IsCartEmpty, SetCartEmpty] = useState(false);
  if (
    localStorage.getItem("cart-items") === null ||
    localStorage.getItem("cart-items") === ""
  ) {
    // SetCartEmpty(true);
  } else {
    // SetCartEmpty(false)
    for (var data of ProductArr) {
      if (
        localStorage.getItem("cart-items").split(",").includes(`${data.id}`)
      ) {
        onlycartproducts.push(data);
      }
    }
  }
  const CartItems = onlycartproducts.map((ProductJson) => (
    <Cartitem key={ProductJson.id} {...ProductJson} />
  ));
  console.log(IsCartEmpty())
  return (
    <>
      {/*!! Empty cart */}
      
      {IsCartEmpty() ? (
        <div className="min-grid">
          {" "}
          <div icon="empty-box"></div>
          <div className="min-row-grid">
            <p>Your Shopping Cart is empty!</p>
            <Link to={"/e-commerce01"}>Browse Store</Link>
          </div>
        </div>
      ) : (
        ""
      )}

      {/*!! CartItems */}
      {IsCartEmpty() ? (
        ""
      ) : (
        <>
          <div>{CartItems}</div>
          <div className="chechout">
            <div>Subtotal(5 items): &#8377; 4490 </div>
            <button id="place-order-btn">Place order</button>
            <div>
              You will be notified when your is packed.then just visit our store
              and get your items
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ShoppingCart;
