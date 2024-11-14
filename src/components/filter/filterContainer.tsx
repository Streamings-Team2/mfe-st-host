import React, { useState } from "react";
import FilterView from "./filterView";

const FilterContainer: React.FC = () => {
  const [airline, setAirline] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [flightNumber, setFlightNumber] = useState<string>("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAirlineChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setAirline(e.target.value);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setStatus(e.target.value);
  const handleFlightNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlightNumber(e.target.value);
  

  const handleFilter = () => {
    // Aquí puedes agregar una lógica de validación para verificar si hay errores
    if (!airline || !status || !flightNumber) {
      setIsPopupOpen(true); // Mostrar el pop-up si falta algún campo
    } else {
      console.log("Filtrando:", { airline, status, flightNumber });
    }
  };

  const handleClear = () => {
    setAirline("");
    setStatus("");
    setFlightNumber("");
    console.log("Limpiando filtros");
    
  };

  return (
    <FilterView
      airline={airline}
      status={status}
      flightNumber={flightNumber}
      onAirlineChange={handleAirlineChange}
      onStatusChange={handleStatusChange}
      onFlightNumberChange={handleFlightNumberChange}
      onFilter={handleFilter}
      onClear={handleClear}
      isPopupOpen={isPopupOpen}
      onClosePopup={() => setIsPopupOpen(false)}
    />
  );
};

export default FilterContainer;
