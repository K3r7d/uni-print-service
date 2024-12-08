import { memo, SVGProps } from 'react';

const ZoomInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.125 12.125L9.40625 9.40625M5.875 4V7.75M4 5.875H7.75M10.875 5.875C10.875 8.63642 8.63642 10.875 5.875 10.875C3.11358 10.875 0.875 8.63642 0.875 5.875C0.875 3.11358 3.11358 0.875 5.875 0.875C8.63642 0.875 10.875 3.11358 10.875 5.875Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ZoomInIcon);
export { Memo as ZoomInIcon };
