import type { SVGProps } from "react";
const SvgAiSparkle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <g
      stroke="#00BECC"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#Ai-Sparkle_svg__a)"
    >
      <path d="M5.509 1.407a.5.5 0 0 1 .983 0l.525 2.779a1 1 0 0 0 .797.797l2.78.525a.5.5 0 0 1 0 .983l-2.78.526a1 1 0 0 0-.797.797l-.525 2.779a.5.5 0 0 1-.983 0l-.526-2.779a1 1 0 0 0-.797-.797l-2.779-.526a.5.5 0 0 1 0-.983l2.78-.525a1 1 0 0 0 .796-.797z" />
      <path strokeWidth={2} d="M10 1v2" />
      <path d="M11 2H9M2 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </g>
    <defs>
      <clipPath id="Ai-Sparkle_svg__a">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAiSparkle;
