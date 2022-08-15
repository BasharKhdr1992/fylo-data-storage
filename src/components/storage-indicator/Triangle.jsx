import React from "react";

const Triangle = () => {
  return (
    <svg
      id="triangle"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="150,100 200,100 200,150"
        style={{
          fill: "hsl(243, 100%, 93%)",
          stroke: "hsl(243, 100%, 93%)",
          strokeWidth: 1,
        }}
      />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};

export default Triangle;
