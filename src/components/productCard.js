import React, { useState } from "react";
import styles from "../pages/css/products.module.scss";
import { useHistory } from "react-router-dom";

const Product = ({ productList }) => {
  const [selectedProduct, setSelected] = useState(0);
  const selectProduct = (id) => {
    setSelected(id);
  };
  let history = useHistory();
  const productDivList = productList.map((product) => {
    return (
      <div
        className={`${styles["product-card"]} ${
          selectedProduct === product.id ? styles.active : ""
        }`}
        key={product.id}
        onClick={() => {
          selectProduct(product.id);
          history.push("/productedit");
        }}
      >
        <img src={product.productImage} alt="product" />
        <h4>{product.productName}</h4>
      </div>
    );
  });
  return productDivList;
};
export default Product;
