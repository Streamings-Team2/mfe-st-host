import React, { useState }  from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Common from "mfe_st_common/Common";
import Utils from "mfe_st_utils/Utils";
import Errors from "mfe_st_errors/Errors";

import FilterComponent from "./components/filter/filterContainer";

const App = () => {
  const [data, setData] = useState<>([])
  const [parameters, setParameters] = useState<>([])
  const [pagination, setPagination] = useState<>([])

  // const handlerData = (parameters:string)=>{
  //   GET("" + parameters)
  //     .then(data=>{
  //       setData(data)
  //     })
  //     .catch(err=>{

  //     })
    
  // }

  // const handlerData = (pagination:string)=>{
  //   GET("" + parameters+pagionation)
  //     .then(data=>{
  //       setData(data)
  //     })
  //     .catch(err=>{
        
  //     })
    
  // }

  return (
  // <div className="mt-10 text-3xl mx-auto max-w-6xl">
  //   <Utils />
  //   <Common />
  //   <Errors />
  // </div>
    <div className="h-screen bg-blue-100 p-4 flex flex-col">
      {/* filter */}
      <div className="bg-white rounded-t-lg p-4 shadow-md mb-4">
        {/* <FilterComponent onData={handlerData}/> */}
        <FilterComponent />
      </div>
    
      {/* table */}
      <div className="flex-grow overflow-y-auto">
        <div className="w-full bg-white" headers={headr} data={data}>tabla</div>
      </div>
    
      {/* pages */}
      <div className="flex items-center justify-between mt-4">
        <div className="w-full bg-white" >paginado</div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);

