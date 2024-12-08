import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M2.0875 0L0.9125 1.175L4.72917 5L0.9125 8.825L2.0875 10L7.0875 5L2.0875 0Z' fill='white' />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
