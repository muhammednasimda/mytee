import React from "react";
import PinchZoomPan from "react-responsive-pinch-zoom-pan";

const ProductEdit = () => {
  return (
    <div style={{ width: "1000px", height: "1000px" }}>
      <PinchZoomPan zoomButtons={false} position="center">
        <img alt="Test Image" src="http://picsum.photos/750/750" />
      </PinchZoomPan>
    </div>
  );
};
export default ProductEdit;
