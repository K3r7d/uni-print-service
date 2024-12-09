import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1.705 0L0.295 1.41L4.875 6L0.295 10.59L1.705 12L7.705 6L1.705 0Z' fill='black' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
