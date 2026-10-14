import type { RestaurantRating } from '@contracts';

type RatedValue = Exclude<RestaurantRating, ''>;

const faceColors: Record<RatedValue, string> = {
  loved: '#35B779',
  liked: '#A6D96A',
  neutral: '#F5D547',
  disliked: '#F5A04A',
  disappointed: '#ED6A64',
};

export function RatingFace({ rating, size = 32 }: { rating: RatedValue; size?: number }) {
  const happy = rating === 'loved' || rating === 'liked';
  const neutral = rating === 'neutral';
  const strokeWidth = Math.max(1.5, size * 0.055);

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <circle cx="16" cy="16" r="15.5" fill={faceColors[rating]} stroke="#24201D30" />
      <ellipse cx="10.8" cy="12.2" rx="1.6" ry="1.9" fill="#24201D" />
      <ellipse cx="21.8" cy="12.2" rx="1.6" ry="1.9" fill="#24201D" />
      {neutral ? (
        <path d="M9 20h14" stroke="#24201D" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <path
          d={happy ? 'M8 18c2.2 4.4 5 6.3 8 6.3s5.8-1.9 8-6.3' : 'M8 24c2.2-4.4 5-6.3 8-6.3s5.8 1.9 8 6.3'}
          fill={rating === 'loved' ? '#24201D' : 'none'}
          stroke="#24201D"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      )}
      {rating === 'disappointed' && (
        <>
          <path d="m7.5 7.5 4 1.3M24.5 7.5l-4 1.3" stroke="#24201D" strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}
