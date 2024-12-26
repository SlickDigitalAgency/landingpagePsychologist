export interface BookingFormData {
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  sessionType: 'online' | 'in-person';
  message?: string;
}