import React, { useState } from "react";
import Draggable from "react-draggable";
import styles from "./css/productedit.module.scss";
import Slider from "react-input-slider";
import mockup from "./iphone11.png";

const ProductEdit = () => {
  let [imageWidth, setWidth] = useState(200);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.editContainer}>
        <div className={styles.dragContainer}>
          <Draggable>
            <img
              alt="tee"
              src="http://picsum.photos/800"
              width={imageWidth}
              className={styles.customImage}
            />
          </Draggable>
        </div>
        <img src={mockup} className={styles.mockupImage} />
      </div>
      <div className={styles.controlsContainer}>
        <p>Image Size</p>
        <Slider
          axis="x"
          xmax="600"
          x={imageWidth}
          onChange={({ x }) => setWidth(x)}
        />
      </div>
    </div>
  );
};
export default ProductEdit;
