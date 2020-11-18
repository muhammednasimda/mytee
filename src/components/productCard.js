import React, { useState } from "react";
import styles from "../pages/css/products.module.scss";
import { Link } from "react-router-dom";

const Product = ({ productList }) => {
  const [selectedProduct, setSelected] = useState(0);
  const selectProduct = (id) => {
    setSelected(id);
  };
  const productDivList = productList.map((product) => {
    return (
      <Link to="/productedit">
        <div
          className={`${styles["product-card"]} ${
            selectedProduct === product.id ? styles.active : ""
          }`}
          key={product.id}
          onClick={() => {
            selectProduct(product.id);
          }}
        >
          <img src={product.productImage} alt="product" />
          <h4>{product.productName}</h4>
        </div>
      </Link>
    );
  });
  return productDivList;
};
export default Product;
