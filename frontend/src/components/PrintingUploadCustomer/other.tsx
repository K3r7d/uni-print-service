import { memo, SVGProps } from 'react';

const Ellipse196Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={16} cy={16} rx={16} ry={16} fill='white' />
  </svg>
);

const Ellipse97Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={4.99964} cy={5} r={5} fill='#35B94B' stroke='white' strokeWidth={2} />
  </svg>
);

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-0.000435114 -3.49691e-07L3.99956 4L7.99957 0'
      stroke='#242F48'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);


const Memo1 = memo(Ellipse97Icon);

const Memo2 = memo(Ellipse196Icon);
const Memo3 = memo(VectorIcon);
export { Memo1 as Ellipse97Icon, Memo2 as Ellipse196Icon, Memo3 as VectorIcon };
