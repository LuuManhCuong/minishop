import cart from "../../image/cart.png";
import Product from "../Product/Product";
import "./cart.scss";

function Cart({ cartDb }) {
  let cartD = Array.from(new Set(cartDb));
  let totalPrice = cartDb.reduce((total, e) => {
    return (total += Number(
      e.price.replace("000", "").replaceAll(".", "").replace("đ", "")
    ));
  }, 0);
  let formatTotalPrice = totalPrice
    .toFixed(3)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return (
    <>
      <div className="cart">
        <img src={cart} alt="cart" />
        <p className="quantity">{cartD.length}</p>

        {cartD.length > 0 ? (
          <div className="cart-block">
            {cartD.map((e, i) => (
              <Product key={i} productItem={e} showCloseBtn={true}></Product>
            ))}

            <h3 className="total">tổng giá: {formatTotalPrice}đ</h3>
          </div>
        ) : (
          <div className="cart-block">
            <p>Ko có sản phẩm trong giỏ hàng"</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
