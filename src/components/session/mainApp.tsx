import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { Flight } from "../../models/Flight";
import { TABLE_PAY_HEADERS } from "../../mock/mock";
import FilterComponent from "../filter/filterContainer";
import { getPagination, getDataSlice } from "mfe_st_utils/Pagination";
import { restGet } from "mfe_st_utils/Getters";
import { URL } from "mfe_st_utils/CONSTANTS";
import { getInitials } from "mfe_st_utils/InfoData";
import PaginationComponent from "mfe_st_common/PaginationComponent";
import TableComponent from "mfe_st_common/TableComponent";

export const MainApp = () => {
  const [data, setData] = useState<Flight[]>([]);
  const [parameters, setParameters] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [itemsPerPage, _] = useState<number>(5);
  const [userData, setUser] = useState({ fullName: "", email: "" });
  const { instance } = useMsal();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    getFlights(URL, parameters, page);
  };

  const handlerData = (filters: any) => {
    setParameters(filters);
    getFlights(URL, parameters, currentPage);
  };

  const getFlights = (url: string, params: string, currentPage: number) => {
    const query = Object.keys(params)
      .filter((key: any) => params[key] !== "")
      .map(
        (key: any) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");

    restGet(`${url}?${query}`)
      .then((data: Flight[]) => {
        const { pages, totalPages } = getPagination(
          currentPage,
          data.length,
          itemsPerPage,
          3
        );
        setVisiblePages(pages);
        setTotalPages(totalPages);
        setData(getDataSlice(data, itemsPerPage, currentPage));
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!user || Object.keys(user).length === 0) {
      window.location.href = "/login";
      return;
    }

    const setUserData = {
      fullName: user.name || "",
      email: user.username || "",
    };
    setUser(setUserData);

    getFlights(URL, parameters, 1);
  }, [parameters]);

  const handleLogout = async () => {
    await localStorage.removeItem("user");

    try {
      await instance.logoutRedirect();
    } catch (error) {
      console.error("Error al cerrar sesión con MSAL:", error);
    }
  };

  return (
    <div className="h-screen bg-blue-100 p-4 flex flex-col">
      <div className="bg-blue-500 text-white flex items-center p-4 shadow-md">
        <div className="bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4">
          {getInitials(userData.fullName)}
        </div>

        <div className="flex flex-col">
          <span className="font-bold">
            {userData.fullName.split(" ").slice(0, 3).join(" ")}
          </span>
          <span className="text-sm">{userData.email}</span>
        </div>
        <button
          onClick={handleLogout}
          className="ml-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="bg-white p-4 shadow-md mb-4">
        <FilterComponent onData={handlerData} />
      </div>
      <div className="flex-grow overflow-y-auto">
        <TableComponent
          headers={TABLE_PAY_HEADERS}
          data={data}
          editActions={() => {}}
          optionsActions={() => {}}
        />
      </div>
      <div className="bg-white rounded-b-lg p-4 shadow-md mb-4 flex items-center justify-center mt-4">
        {data.length > 0 && (
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            visiblePages={visiblePages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};
