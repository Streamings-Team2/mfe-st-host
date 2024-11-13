import React, { useState, useEffect } from "react";
import FilterView from "./filterView";

const FilterContainer: React.FC = ( ) => {
  const [airline, setAirline] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [flightNumber, setFlightNumber] = useState<string>("");
  const [airlinesList, setAirlinesList] = useState([]); 
  const [statesList, setStatesList] = useState([]); 

  const handleAirlineChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setAirline(e.target.value);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setStatus(e.target.value);
  const handleFlightNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlightNumber(e.target.value);

  const handleFilter = () => {
    console.log("Filtrando:", { airline, status, flightNumber });

    // onData({ airline, status, flightNumber }) parametro del componente

  };

  const handleClear = () => {
    // setAirline("");
    // setStatus("");
    // setFlightNumber("");
    // onData({})
  };

  const loadConstants = async () => {
    try {
      const module = await import("mfe_st_utils/CONSTANTS");
      const { AIRLINES, STATES } = module.default;

      setAirlinesList(AIRLINES); 
      setStatesList(STATES); 
    } catch (error) {
      console.error("Error al cargar las constantes:", error);
    }
  };

 
  useEffect(() => {
    loadConstants();
   
    
  }, []);
  

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
      airlines={airlinesList} 
      states={statesList} 
    />
  );
};

export default FilterContainer;
