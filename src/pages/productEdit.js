import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ProductEdit = () => {
  return (
    <div>
      <TransformWrapper>
        <TransformComponent>
          <img
            src="https://naver.github.io/egjs-infinitegrid/assets/image/1.jpg"
            id="target"
            alt="edit"
            width="200"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};
export default ProductEdit;
