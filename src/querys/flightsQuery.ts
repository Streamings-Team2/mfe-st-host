import { gql } from "../__generated__/";

export const FLIGTHS = gql(`
query Flights($airlineName: String, $status: String, $flightNumber: String) {
  flights(airlineName: $airlineName, status: $status, flightNumber: $flightNumber) {
    code
    flights {
      id
      flightNumber
      airlineName
      departureTime
      arrivalTime
      status
      terminal
    }
    message
    success
  }
}
`);
