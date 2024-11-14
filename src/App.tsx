import React, { Suspense, useEffect, useState }  from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Common from "mfe_st_common/Common";
import {restGet} from "mfe_st_utils/Getters";
import {URL} from "mfe_st_utils/CONSTANTS"
import TableComponent from "mfe_st_common/TableComponent";
import FilterComponent from "./components/filter/filterContainer";
// import Errors from "mfe_st_errors/Errors";
import ErrorBoundary  from "mfe_st_errors/ErrorBoundary";
import BuggyComponent  from "mfe_st_errors/BuggyComponent";
import { DATA, TABLE_PAY_HEADERS } from "./mock/mock";
import { Flight } from "./models/Flight";

const App = () => {
  const [data, setData] = useState<Flight[]>([])
  const [parameters, setParameters] = useState<any>({});
  const [pagination, setPagination] = useState<string>("")

  const handlerPaginate = (parameters:string)=>{
    setPagination(parameters)
    getFlights(URL, parameters)
  }

  const handlerData =  (filters:any)=>{
     setParameters(filters)
     getFlights(URL, parameters)
  }
  

  
  const getFlights = (url: string, params: any) => {
    
    const query = Object.keys(params)
      .filter(key => params[key] !== "")
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  
    restGet(`${url}?${query}`)
      .then((data: Flight[]) => {
        setData(data);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  useEffect(()=> {
    getFlights(URL, parameters)
  },[parameters])
  

  return (
  // <div className="mt-10 text-3xl mx-auto max-w-6xl">
  //   <Utils />
  //   <Common />
  //   <Errors />
  // </div>
  <ErrorBoundary>
    <div className="h-screen bg-blue-100 p-4 flex flex-col">
      {/* filter */}
      <div className="bg-white rounded-t-lg p-4 shadow-md mb-4">
        <FilterComponent onData={handlerData}/>
      </div>
      {/* <BuggyComponent />  */}
      {/* table */}
      <div className="flex-grow overflow-y-auto">
        <TableComponent
          headers={TABLE_PAY_HEADERS}
          data={data}
          editActions={()=>{}}
          optionsActions={()=>{}}
        />
      </div>
    
      {/* pages */}
      <div className="flex items-center justify-between mt-4">
        <div className="w-full bg-white" >paginado</div>
      </div>
    </div>
    </ErrorBoundary>
  );
}

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <Suspense fallback={<div>loading</div>}>
    <App />
  </Suspense>
);

