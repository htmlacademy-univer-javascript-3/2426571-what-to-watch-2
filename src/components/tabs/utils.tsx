import { Time } from '../../types/enums';

export const formatDuration = (duration: number): string => {
  const hours = Math.floor(duration / Time.HourMinutes);
  const minutes = Math.floor(duration - hours * Time.HourMinutes);
  return `${hours}h ${minutes}m`;
};

export const formatCastWithComma = (cast: string[]) => cast.join(', ');
export const formatCastWithNextLine = (cast: string[]) => cast.map((actor) => <span key={actor}>{actor}<br /></span>);

export const formatRating = (rating: number) => {
  if (rating < 3) {
    return 'Bad';
  }
  if (rating < 5) {
    return 'Normal';
  }
  if (rating < 8) {
    return 'Good';
  }
  if (rating < 10) {
    return 'Very good';
  }
  return 'Awesome';
};
