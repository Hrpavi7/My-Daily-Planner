export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  time?: string;
  color: 'primary' | 'destructive' | 'chart1' | 'chart2' | 'chart3';
}
