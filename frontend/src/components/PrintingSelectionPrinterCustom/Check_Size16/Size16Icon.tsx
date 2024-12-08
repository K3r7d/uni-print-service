import { memo, SVGProps } from 'react';

const Size16Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.3333 0L4 7.33333L0.666667 4'
      stroke='#1E1E1E'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Size16Icon);
export { Memo as Size16Icon };
