import * as React from "react";

const Flame = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <radialGradient
        id="fireGradient"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
      >
        <stop offset="0%" stopColor="#ff5000" stopOpacity="1" />
        <stop offset="100%" stopColor="#ff5000" stopOpacity="0" />
      </radialGradient>
    </defs>
    <path
      fill="url(#fireGradient)"
      stroke="url(#fireGradient)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.404 9.283c-2.404 3.217-2.539 6.654 0 9.192A6.48 6.48 0 0 0 12 20.38a6.48 6.48 0 0 0 4.596-1.904c2.539-2.538 2.404-5.975 0-9.192C14.192 6.065 12.505 3.852 12 2.687c-.505 1.165-2.192 3.378-4.596 6.596Z"
    />
  </svg>
);

export default Flame;
