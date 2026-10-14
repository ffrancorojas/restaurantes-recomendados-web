import type { RestaurantRating } from '@contracts';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import './icon.styles.scss';

type RatedValue = Exclude<RestaurantRating, ''>;

export const RATING_ICON_NAMES = {
  loved: 'ratingLoved',
  liked: 'ratingLiked',
  neutral: 'ratingNeutral',
  disliked: 'ratingDisliked',
  disappointed: 'ratingDisappointed',
} as const satisfies Record<RatedValue, string>;

export type IconName =
  | 'edit'
  | 'delete'
  | 'close'
  | 'back'
  | 'add'
  | 'location'
  | 'favorite'
  | 'favoriteFilled'
  | 'menu'
  | 'search'
  | 'google'
  | 'share'
  | 'filter'
  | 'chevronDown'
  | 'chevronUp'
  | 'check'
  | 'checkbox'
  | 'checkboxChecked'
  | 'sparkle'
  | 'spinner'
  | (typeof RATING_ICON_NAMES)[RatedValue];

const faceColors: Record<RatedValue, string> = {
  loved: '#35B779',
  liked: '#A6D96A',
  neutral: '#F5D547',
  disliked: '#F5A04A',
  disappointed: '#ED6A64',
};

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function lineIcon(size: number, content: ReactNode) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {content}
    </svg>
  );
}

function ratingFace(size: number, rating: RatedValue) {
  const happy = rating === 'loved' || rating === 'liked';
  const neutral = rating === 'neutral';
  const strokeWidth = Math.max(1.5, size * 0.055);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="icon-ratingFace"
    >
      <circle cx="16" cy="16" r="15.5" fill={faceColors[rating]} stroke="#24201D30" />
      <ellipse cx="10.8" cy="12.2" rx="1.6" ry="1.9" fill="#24201D" />
      <ellipse cx="21.8" cy="12.2" rx="1.6" ry="1.9" fill="#24201D" />
      {neutral ? (
        <path d="M9 20h14" stroke="#24201D" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <path
          d={
            happy
              ? 'M8 18c2.2 4.4 5 6.3 8 6.3s5.8-1.9 8-6.3'
              : 'M8 24c2.2-4.4 5-6.3 8-6.3s5.8 1.9 8 6.3'
          }
          fill={rating === 'loved' ? '#24201D' : 'none'}
          stroke="#24201D"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      )}
      {rating === 'disappointed' && (
        <path d="m7.5 7.5 4 1.3M24.5 7.5l-4 1.3" stroke="#24201D" strokeWidth="1.5" />
      )}
    </svg>
  );
}

const iconRenderers = {
  edit: (size: number) =>
    lineIcon(
      size,
      <>
        <path {...strokeProps} d="m4 16.5-.8 4.3 4.3-.8L20 7.5 16.5 4 4 16.5Z" />
        <path {...strokeProps} d="m14.8 5.7 3.5 3.5" />
      </>,
    ),
  delete: (size: number) =>
    lineIcon(
      size,
      <>
        <path {...strokeProps} d="M4 7h16M10 11v6m4-6v6M6 7l1 13h10l1-13M9 7V4h6v3" />
      </>,
    ),
  close: (size: number) => lineIcon(size, <path {...strokeProps} d="m6 6 12 12M18 6 6 18" />),
  back: (size: number) => lineIcon(size, <path {...strokeProps} d="M19 12H5m7 7-7-7 7-7" />),
  add: (size: number) => lineIcon(size, <path {...strokeProps} d="M12 5v14M5 12h14" />),
  location: (size: number) =>
    lineIcon(
      size,
      <>
        <path {...strokeProps} d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle {...strokeProps} cx="12" cy="10" r="2.5" />
      </>,
    ),
  favorite: (size: number) =>
    lineIcon(
      size,
      <path
        {...strokeProps}
        d="M20.8 8.8c0 5.1-8.8 10.7-8.8 10.7S3.2 13.9 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z"
      />,
    ),
  favoriteFilled: (size: number) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.8 8.8c0 5.1-8.8 10.7-8.8 10.7S3.2 13.9 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z" />
    </svg>
  ),
  menu: (size: number) => lineIcon(size, <path {...strokeProps} d="M4 6h16M4 12h16M4 18h16" />),
  search: (size: number) =>
    lineIcon(
      size,
      <>
        <circle {...strokeProps} cx="10.8" cy="10.8" r="6.8" />
        <path {...strokeProps} d="m16 16 4 4" />
      </>,
    ),
  google: (size: number) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <text
        x="12"
        y="19"
        textAnchor="middle"
        fontSize="21"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        fill="currentColor"
      >
        G
      </text>
    </svg>
  ),
  share: (size: number) =>
    lineIcon(
      size,
      <>
        <circle {...strokeProps} cx="18" cy="5" r="3" />
        <circle {...strokeProps} cx="6" cy="12" r="3" />
        <circle {...strokeProps} cx="18" cy="19" r="3" />
        <path {...strokeProps} d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" />
      </>,
    ),
  filter: (size: number) =>
    lineIcon(size, <path {...strokeProps} d="M4 5h16l-6 7v6l-4 2v-8L4 5Z" />),
  chevronDown: (size: number) => lineIcon(size, <path {...strokeProps} d="m6 9 6 6 6-6" />),
  chevronUp: (size: number) => lineIcon(size, <path {...strokeProps} d="m6 15 6-6 6 6" />),
  check: (size: number) => lineIcon(size, <path {...strokeProps} d="m5 12 4.5 4.5L19 7" />),
  checkbox: (size: number) =>
    lineIcon(size, <rect {...strokeProps} x="3.5" y="3.5" width="17" height="17" rx="3" />),
  checkboxChecked: (size: number) =>
    lineIcon(
      size,
      <>
        <rect {...strokeProps} x="3.5" y="3.5" width="17" height="17" rx="3" />
        <path {...strokeProps} d="m7.5 12 3 3 6-6" />
      </>,
    ),
  sparkle: (size: number) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2 2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2Z" />
    </svg>
  ),
  spinner: (size: number) => (
    <svg
      className="app-icon-spinner"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".25" strokeWidth="3" />
      <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  ratingLoved: (size: number) => ratingFace(size, 'loved'),
  ratingLiked: (size: number) => ratingFace(size, 'liked'),
  ratingNeutral: (size: number) => ratingFace(size, 'neutral'),
  ratingDisliked: (size: number) => ratingFace(size, 'disliked'),
  ratingDisappointed: (size: number) => ratingFace(size, 'disappointed'),
} satisfies Record<IconName, (size: number) => ReactNode>;

type IconProps = { name: IconName; size?: number; className?: string };

export function Icon({ name, size = 22, className }: IconProps) {
  const icon = iconRenderers[name](size);
  if (className) return <span className={classNames('inline-flex', 'icon-wrapper', className)}>{icon}</span>;
  return icon;
}
