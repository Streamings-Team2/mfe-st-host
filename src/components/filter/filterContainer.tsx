import React, { useState } from "react";
import FilterView from "./filterView";
import {STATES, AIRLINES} from "mfe_st_utils/CONSTANTS";

interface Props {
  onData: (filter: any)=> void
}
const FilterContainer: React.FC<Props> = ( {onData}:Props ) => {
  const [airlineName, setAirline] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [flightNumber, setFlightNumber] = useState<string>("");
  // const [airlinesList, setAirlinesList] = useState([]); 
  // const [statesList, setStatesList] = useState([]); 

  const handleAirlineChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setAirline(e.target.value);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setStatus(e.target.value);
  const handleFlightNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlightNumber(e.target.value);

  const handleFilter = () => {
    console.log("Filtrando:", { airlineName, status, flightNumber });

    if(airlineName || status || flightNumber){
      
      onData({ airlineName, status, flightNumber }) 
    }

  };

  const handleClear = () => {
    setAirline("");
    setStatus("");
    setFlightNumber("");
     onData({})
  };

  return (
    <FilterView
      airline={airlineName}
      status={status}
      flightNumber={flightNumber}
      onAirlineChange={handleAirlineChange}
      onStatusChange={handleStatusChange}
      onFlightNumberChange={handleFlightNumberChange}
      onFilter={handleFilter}
      onClear={handleClear}
      airlines={AIRLINES} 
      states={STATES} 
    />
  );
};

export default FilterContainer;
