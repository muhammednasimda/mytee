import React from "react";
import PinchZoomPan from "react-responsive-pinch-zoom-pan";

const ProductEdit = () => {
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <PinchZoomPan zoomButtons={false}>
        <img alt="Test Image" src="http://picsum.photos/750/750" />
      </PinchZoomPan>
    </div>
  );
};
export default ProductEdit;
