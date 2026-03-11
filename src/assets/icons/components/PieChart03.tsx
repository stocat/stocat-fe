
import type { SVGProps } from "react";
const SvgPieChart03 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10H12z" opacity={0.12} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2a10 10 0 0 1 10 10M12 2v10h10M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10M12 2c5.523 0 10 4.477 10 10m0 0a10 10 0 0 1-1.09 4.54"
    />
  </svg>
);
export default SvgPieChart03;
