import { Time } from '../../types/enums';

export const formatDuration = (duration: number): string => {
  const hours = Math.floor(duration / Time.HourMinutes);
  const minutes = Math.floor(duration - hours * Time.HourMinutes);
  return `${hours}h ${minutes}m`;
};

export const formatCast = (cast: [string]): string => cast.join(', \n');
