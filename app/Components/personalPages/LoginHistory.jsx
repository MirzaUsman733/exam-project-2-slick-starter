"use client";
import { Skeleton, TablePagination } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const LoginHistory = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      if (!loginResponse?._token) {
        router.push("/login");
        return;
      }
      const response = await axios.get(
        `${process?.env?.NEXT_PUBLIC_API_BASE_URL}/v1/account/login-history`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setData(response.data.history);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">
        Login History
      </h1>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="w-full text-sm text-gray-700">
          <thead className="text-xs font-semibold uppercase text-gray-600 bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">
                IP Address
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Date of Login Session
              </th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from(Array(5)).map((_, index) => (
                  <tr key={index} className="bg-white">
                    <td colSpan="2" className="px-6 py-4">
                      <Skeleton animation="wave" height={24} />
                    </td>
                  </tr>
                ))
              : (rowsPerPage > 0
                  ? data.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : data
                ).map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100`}
                  >
                    <td className="px-6 py-4 font-medium">
                      {item.ip}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {moment.utc(item.date).format("MMM DD, YYYY | hh:mm A")}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        <div className="bg-white p-4">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className="text-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginHistory;
