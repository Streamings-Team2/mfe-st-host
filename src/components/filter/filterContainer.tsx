import React, { useState } from "react";
import FilterView from "./filterView";
import {STATES, AIRLINES} from "mfe_st_utils/CONSTANTS";
import Popup from "mfe_st_errors/PopupComponent";
import Button from "mfe_st_common/Button";
interface Props {
  onData: (filter: any)=> void
}
const FilterContainer: React.FC<Props> = ( {onData}:Props ) => {
  const [airlineName, setAirline] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [flightNumber, setFlightNumber] = useState<string>("");
  // const [airlinesList, setAirlinesList] = useState([]); 
  // const [statesList, setStatesList] = useState([]); 
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleAirlineChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setAirline(e.target.value);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setStatus(e.target.value);
  const handleFlightNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlightNumber(e.target.value);

  const handleFilter = () => {
    if (!airlineName && !status && !flightNumber) {
      setIsPopupVisible(true);
      return;
    }
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
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
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

   {isPopupVisible && (
        <Popup
          title="Información"
          content="Debe ingresar al menos un filtro para realizar la búsqueda."
          onClose={handleClosePopup}
          buttonComponent={
            <Button onClick={handleClosePopup} 
             className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold"
            >
Aceptar
              </Button>
          }
        />
      )}


    </>
  );
};

export default FilterContainer;
