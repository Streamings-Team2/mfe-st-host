import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import Common from "mfe_st_common/Common";
// import Utils from "mfe_st_utils/Utils";
import ErrorBoundary from "./components/ErrorBoundary";
import FilterComponent from "./components/filter/filterContainer";
import BuggyComponent from "./components/BuggyComponent";
const App = () => (
  // <div className="mt-10 text-3xl mx-auto max-w-6xl">
  //   <Utils />
  //   <Common />
  //   <Errors />
  // </div>
<ErrorBoundary>
  <div className="h-screen bg-blue-100 p-4 flex flex-col">
    {/* filter */}
    <div className="bg-white rounded-t-lg p-4 shadow-md mb-4">
      <FilterComponent />
    </div>

    {/* table */}
    <div className="flex-grow overflow-y-auto">
      <div className="w-full bg-white">tabla</div>
    </div>
    {/* <BuggyComponent />  */}
    {/* pages */}
    <div className="flex items-center justify-between mt-4">
      <div className="w-full bg-white">
        pages
      </div>
    </div>


    <div className="flex items-center justify-between mt-4">
      <div className="w-full bg-white">Popup</div>
    </div>
  </div>
  </ErrorBoundary>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);
