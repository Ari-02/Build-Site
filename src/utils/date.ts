import { format, isToday, isYesterday, formatDistanceToNow } from 'date-fns';

export const formatDate = (date: Date): string => {
  if (isToday(date)) {
    return `Today at ${format(date, 'h:mm a')}`;
  }
  if (isYesterday(date)) {
    return `Yesterday at ${format(date, 'h:mm a')}`;
  }
  return format(date, 'MMM d, yyyy');
};

export const formatRelativeTime = (date: Date): string => {
  return formatDistanceToNow(date, { addSuffix: true });
};

export const getWeekDates = (): Date[] => {
  const today = new Date();
  const dates: Date[] = [];
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - today.getDay() + i);
    dates.push(date);
  }
  
  return dates;
};