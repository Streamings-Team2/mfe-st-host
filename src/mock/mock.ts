import { HeadersTable } from "../models/Table"

export const TABLE_PAY_HEADERS: HeadersTable[] = [
    {
      field: 'flightNumber',
      text: 'N° VUELO',
      sortable: true,
      iconInfo: false,
      fieldType: 'text',
    },
    {
      field: 'airlineName',
      text: 'Aerolinea',
      sortable: true,
      iconInfo: false,
      fieldType: 'text',
    },
    {
      field: 'departureTime',
      text: 'HORA SALIDA',
      sortable: true,
      iconInfo: false,
      fieldType: 'text',
    },
    {
      field: 'arrivalTime',
      text: 'HORA LLEGADA',
      sortable: true,
      iconInfo: false,
      fieldType: 'text',
    },
    {
      field: 'status',
      text: 'ESTADO DEL VUELO',
      sortable: false,
      iconInfo: false,
      fieldType: 'button-state',
    },
    {
        field: 'terminal',
        text: 'TERMINAL',
        sortable: false,
        iconInfo: false,
        fieldType: 'text',
    },
]

export const DATA = [
    {
      "flightNumber": "100",
      "airlineName": "Avianca",
      "departureTime": "16:30",
      "arrivalTime": "17:30",
      "status": "CANCELADO",
      "terminal": "terminal 1",
      "id": "1"
    },
    {
      "flightNumber": "200",
      "airlineName": "Wingo",
      "departureTime": "18:30",
      "arrivalTime": "22:30",
      "status": "EN HORARIO",
      "terminal": "terminal 2",
      "id": "2"
    },
    {
      "flightNumber": "300",
      "airlineName": "JetSMART",
      "departureTime": "13:15",
      "arrivalTime": "14:00",
      "status": "RETRASADO",
      "terminal": "terminal 3",
      "id": "3"
    }
]