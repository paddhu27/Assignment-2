import React from "react";

const HamburgerIcon = ({height=25, width=25, stroke="#393e7f"}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 18L20 18"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default HamburgerIcon;
