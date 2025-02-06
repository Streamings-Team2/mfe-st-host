import React from "react";
import Button from "mfe_st_common/Button";
import LabelComponent from "mfe_st_common/LabelComponent";
import InputComponent from "mfe_st_common/InputComponent";
import SelectComponent from "mfe_st_common/SelectComponent";
import OptionComponent from "mfe_st_common/OptionComponent";

interface Airline {
  id: number;
  name: string;
}

interface State {
  id: number;
  state: string;
}
interface FilterViewProps {
  airline: string;
  status: string;
  flightNumber: string;
  onAirlineChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onStatusChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onFlightNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilter: () => void;
  onClear: () => void;
  airlines: Airline[];
  states: State[];
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
  airlines,
  states,
}) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-stretch bg-white p-4 rounded-t-lg space-y-4 md:space-y-0 md:space-x-4">
    {/* airline select */}
    <div className="w-full md:w-1/4 flex flex-col justify-end">
      <LabelComponent
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="airline"
      >
        Aerolínea
      </LabelComponent>
      <SelectComponent
        id="airline"
        value={airline}
        onChange={onAirlineChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      >
        <OptionComponent value="">Seleccione una opción</OptionComponent>
        {airlines.length && airlines.map((a) => (
          <OptionComponent key={a.id} value={a.name}>
            {a.name}
          </OptionComponent>
        ))}
      </SelectComponent>
    </div>
  
    {/* status select */}
    <div className="w-full md:w-1/4 flex flex-col justify-end">
      <LabelComponent
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="status"
      >
        Estado
      </LabelComponent>
      <SelectComponent
        id="status"
        value={status}
        onChange={onStatusChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      >
        <OptionComponent value="">Seleccione una opción</OptionComponent>
        {states && states.map((a) => (
          <OptionComponent key={a.id} value={a.state}>
            {a.state}
          </OptionComponent>
        ))}
      </SelectComponent>
    </div>
  
    {/* flight number */}
    <div className="w-full md:w-1/4 flex flex-col justify-end">
      <LabelComponent
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="flightNumber"
      >
        N° vuelo
      </LabelComponent>
      <InputComponent
        id="flightNumber"
        type="text"
        value={flightNumber}
        onChange={onFlightNumberChange}
        placeholder="Ingrese número de vuelo"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  
    {/* buttons */}
    <div className="flex w-full md:w-1/4 items-end justify-end space-x-2">
      <Button
        onClick={onFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-600 w-full md:w-auto"
      >
        Filtrar
      </Button>
  
      <Button
        onClick={onClear}
        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-bold hover:bg-gray-300 w-full md:w-auto"
      >
        Limpiar
      </Button>
    </div>
  </div>
  
  


  );
};

export default FilterView;
