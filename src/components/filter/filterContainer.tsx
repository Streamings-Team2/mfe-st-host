import React, { useState } from "react";
import FilterView from "./filterView";

const FilterContainer: React.FC = () => {
  const [airline, setAirline] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [flightNumber, setFlightNumber] = useState<string>("");

  const handleAirlineChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setAirline(e.target.value);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setStatus(e.target.value);
  const handleFlightNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlightNumber(e.target.value);

  const handleFilter = () => {
    console.log("Filtrando:", { airline, status, flightNumber });
  };

  const handleClear = () => {
    setAirline("");
    setStatus("");
    setFlightNumber("");
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
    />
  );
};

export default FilterContainer;
