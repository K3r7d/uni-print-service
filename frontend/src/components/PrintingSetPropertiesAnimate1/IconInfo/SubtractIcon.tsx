import { memo, SVGProps } from 'react';

const SubtractIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM12.5 22.826C18.2029 22.826 22.826 18.2029 22.826 12.5C22.826 6.79702 18.2029 2.17387 12.5 2.17387C6.79702 2.17387 2.17387 6.79702 2.17387 12.5C2.17387 18.2029 6.79702 22.826 12.5 22.826Z'
      fill='black'
      fillOpacity={0.5}
    />
  </svg>
);

const Memo = memo(SubtractIcon);
export { Memo as SubtractIcon };
