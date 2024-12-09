import { memo, SVGProps } from 'react';

const Vector2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.545685 0L6.92337 7L13.3011 0' stroke='black' strokeWidth={1.5} />
  </svg>
);

const Memo = memo(Vector2Icon);
export { Memo as Vector2Icon };
