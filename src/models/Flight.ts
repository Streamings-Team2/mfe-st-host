export interface Flight {
  flightNumber: string;
  airlineName: string;
  departureTime: string;
  arrivalTime: string;
  status: string;
  terminal: string;
  id: string;
}

export interface FlightParams {
  airlineName?: string | null;
  status?: string | null;
  flightNumber?: string | null;
}
