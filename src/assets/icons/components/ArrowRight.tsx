import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#646464"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.333 8h9.333M10 5.333 12.667 8 10 10.667"
    />
  </svg>
);
export default SvgArrowRight;
