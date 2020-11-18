import React from "react";
import styles from "./css/products.module.scss";
import Product from "../components/productCard";

const Products = () => {
  let products = [
    {
      id: 1,
      productName: "Phone Case",
      productImage:
        "https://printrove.com/wp-content/uploads/2017/12/Phone-Case.png",
    },
    {
      id: 2,
      productName: "Hoodie",
      productImage:
        "https://printrove.com/wp-content/uploads/2018/11/Hoodie-Line-Drawing.png",
    },
    {
      id: 3,
      productName: "Notebook",
      productImage:
        "https://printrove.com/wp-content/uploads/2017/12/Notebook.png",
    },
    {
      id: 4,
      productName: "Mug",
      productImage: "https://printrove.com/wp-content/uploads/2017/12/Mug.png",
    },
  ];
  return (
    <div className={styles["main-container"]}>
      <div className={styles.topnav}>
        <h1>Select a product</h1>
      </div>
      <div className={styles["product-card-container"]}>
        <Product productList={products} />
      </div>
    </div>
  );
};

export default Products;
