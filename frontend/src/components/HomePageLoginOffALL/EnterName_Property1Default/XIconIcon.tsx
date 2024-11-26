import { memo, SVGProps } from 'react';

const XIconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={3} y={3} width={18.5} height={18.5} rx={9.25} stroke='#667085' />
    <path d='M14.7946 10.0021L10.0026 14.7941' stroke='#667085' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.796 14.797L10 10' stroke='#667085' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(XIconIcon);
export { Memo as XIconIcon };
