import { memo, SVGProps } from 'react';

const Ellipse200Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={1.5} cy={1.5} r={1.5} fill='black' fillOpacity={0.5} />
  </svg>
);

const Memo = memo(Ellipse200Icon);
export { Memo as Ellipse200Icon };
