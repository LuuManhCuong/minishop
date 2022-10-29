/* eslint-disable jsx-a11y/img-redundant-alt */
import "./product.scss";
import { useContext } from "react";
import { Wraper } from "../../App";

function Product({ productItem, showCloseBtn }) {
  const values = useContext(Wraper);
  // console.log(values);
  return (
    <>
      <div className="product">
        <img
          className="product-img"
          src={productItem.cover_image}
          alt="image"
        />
        <div className="product-info">
          <h3 className="product-name">{productItem.name}</h3>
          <p className="price">
            {productItem.price}
            {showCloseBtn && (
              <span style={{ color: "black", marginLeft: "10px" }}>
                x{productItem.quantity}
              </span>
            )}
          </p>
        </div>
        {!showCloseBtn ? (
          <div className="add-product-btn">
            {productItem.stocked === true ? (
              <button onClick={(e) => values.handleAddPoduct(productItem)}>
                Add
              </button>
            ) : (
              <p>Hết hàng</p>
            )}
          </div>
        ) : (
          <div className="add-product-btn">
            <button onClick={(e) => values.handleDeltePoduct(productItem)}>
              Xóa
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default Product;
