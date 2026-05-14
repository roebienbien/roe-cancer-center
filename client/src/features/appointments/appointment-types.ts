export type Appointment = {
  id: string;
  startAt: Date;
  endAt: Date;
  status: string;
};

export type GetAppointmentsResponse = {
  data: Appointment[];
};
