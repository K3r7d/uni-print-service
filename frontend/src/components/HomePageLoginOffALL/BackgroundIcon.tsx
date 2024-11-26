import { memo, SVGProps } from 'react';

const BackgroundIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 430 492' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_f_11_79)'>
      <circle cx={317} cy={379} r={113} fill='#4461F2' />
    </g>
    <g opacity={0.45} filter='url(#filter1_f_11_79)'>
      <circle cx={113} cy={113} r={113} fill='#DDA82A' />
    </g>
    <defs>
      <filter
        id='filter0_f_11_79'
        x={-113}
        y={-51}
        width={860}
        height={860}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={158.5} result='effect1_foregroundBlur_11_79' />
      </filter>
      <filter
        id='filter1_f_11_79'
        x={-317}
        y={-317}
        width={860}
        height={860}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={158.5} result='effect1_foregroundBlur_11_79' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(BackgroundIcon);
export { Memo as BackgroundIcon };
