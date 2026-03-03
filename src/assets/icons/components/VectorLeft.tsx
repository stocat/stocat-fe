import type { SVGProps } from "react";
const SvgVectorLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#1A1A1A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15 18-6-6 6-6"
    />
  </svg>
);
export default SvgVectorLeft;
