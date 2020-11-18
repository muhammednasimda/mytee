import React, { useState } from "react";
import Draggable from "react-draggable";
import styles from "./css/productedit.module.scss";
import Slider from "react-input-slider";

const ProductEdit = () => {
  let [imageWidth, setWidth] = useState(0);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <Draggable bounds="parent">
          <img alt="tee" src="http://picsum.photos/100" width={imageWidth} />
        </Draggable>
      </div>
      <Slider
        axis="x"
        xmax="400"
        x={imageWidth}
        onChange={({ x }) => setWidth(x)}
      />
    </div>
  );
};
export default ProductEdit;
