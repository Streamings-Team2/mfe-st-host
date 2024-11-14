import "./index.scss"
import '@fontsource-variable/roboto-condensed'
import React, { Suspense, useEffect, useState }  from "react"
import ReactDOM from "react-dom/client"
import TableComponent from "mfe_st_common/TableComponent"
import FilterComponent from "./components/filter/filterContainer"
import PaginationComponent from "mfe_st_common/PaginationComponent"
import ErrorBoundary  from "mfe_st_errors/ErrorBoundary";
// import BuggyComponent  from "mfe_st_errors/BuggyComponent";
import {getPagination, getDataSlice} from "mfe_st_utils/Pagination"
import {restGet} from "mfe_st_utils/Getters"
import {URL} from "mfe_st_utils/CONSTANTS"
import { TABLE_PAY_HEADERS } from "./mock/mock"
import { Flight } from "./models/Flight"

const App = () => {
  const [data, setData] = useState<Flight[]>([])
  const [parameters, setParameters] = useState<string>("")
  const [currentPage, setCurrentPage] = useState(1)
  const [visiblePages, setVisiblePages ] = useState<number[]>([])
  const [totalPages, setTotalPages ] = useState<number>(0)
  const [itemsPerPage, _ ] = useState<number>(5)


  const handlePageChange = (page: number)=>{
    setCurrentPage(page)
    getFlights(URL, parameters, page)
  }

  const handlerData = (filters:any)=>{
    setParameters(filters)
    getFlights(URL, parameters, currentPage)
  }
  
  const getFlights = (url:string, params:string, currentPage:number)=>{
    const query = Object.keys(params)
      .filter((key:any) => params[key] !== "")
      .map((key:any) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');

    restGet(url)
      .then((data:Flight[]) => {
        const {pages, totalPages} = getPagination(currentPage, data.length,itemsPerPage, 3)
        setVisiblePages(pages)
        setTotalPages(totalPages)
        setData(getDataSlice(data, itemsPerPage, currentPage))
      })
      .catch((err: any) =>{
        console.error(err)
      })
  }

  useEffect(()=> {
    getFlights(URL, parameters, 1)
  },[])

  return (
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
      <div className="bg-white rounded-b-lg p-4 shadow-md mb-4 flex items-center justify-center mt-4">
        {data.length && (
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            visiblePages={visiblePages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  )

}

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")
const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <Suspense fallback={<div>loading</div>}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Suspense>
)

