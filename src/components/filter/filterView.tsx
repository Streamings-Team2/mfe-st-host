import React from "react";
import Button from "mfe_st_common/Button";

interface FilterViewProps {
  airline: string;
  status: string;
  flightNumber: string;
  onAirlineChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onStatusChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onFlightNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilter: () => void;
  onClear: () => void;
}

const FilterView: React.FC<FilterViewProps> = ({
  airline,
  status,
  flightNumber,
  onAirlineChange,
  onStatusChange,
  onFlightNumberChange,
  onFilter,
  onClear,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 bg-white p-4 rounded-t-lg">
      {/* airline select */}
      <div className="mb-4 md:mb-0 w-full md:w-1/3">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="airline"
        >
          Aerolínea
        </label>
        <select
          id="airline"
          value={airline}
          onChange={onAirlineChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="">Seleccione una opción</option>
          <option value="Avianca">Avianca</option>
          <option value="Wingo">Wingo</option>
          <option value="JetSMART">JetSMART</option>
        </select>
      </div>

      {/* status select*/}
      <div className="mb-4 md:mb-0 w-full md:w-1/3">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="status"
        >
          Estado
        </label>
        <select
          id="status"
          value={status}
          onChange={onStatusChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="">Seleccione una opción</option>
          <option value="En Horario">En Horario</option>
          <option value="Cancelado">Cancelado</option>
          <option value="Retrasado">Retrasado</option>
        </select>
      </div>

      {/* flisht number */}
      <div className="mb-4 md:mb-0 w-full md:w-1/3">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="flightNumber"
        >
          N° vuelo
        </label>
        <input
          id="flightNumber"
          type="text"
          value={flightNumber}
          onChange={onFlightNumberChange}
          placeholder="Ingrese número de vuelo"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      {/* buttons */}
      <div className="flex space-x-2 mt-2 md:mt-0">
        <Button
          styleType="primary"
          label="Filtrar"
          onClick={onFilter}
          >
        </Button>
        <Button
          styleType="danger"
          label="Limpiar"
          onClick={onClear}
        >
        </Button>
      </div>
    </div>
  );
};

export default FilterView;
