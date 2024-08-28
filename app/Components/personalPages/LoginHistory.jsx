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
      const response = await axios.get(`${process?.env?.NEXT_PUBLIC_API_BASE_URL}/v1/account/login-history`, {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY ,
          Authorization: `Bearer ${loginResponse._token}`,
        },
      });
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
    <div className="container max-w-5xl mx-auto p-6">
        <h1 className="text-3xl text-center font-bold mb-10">Login History</h1>
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs uppercase bg-gradient-to-r from-blue-500 to-blue-500">
            <tr>
              <th scope="col" className="px-10 py-3">
                Ip Address
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Date of login session
              </th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? // Render Skeleton placeholders when loading
                Array.from(Array(5)).map((_, index) => (
                  <tr key={index}>
                    <td colSpan="2">
                      <Skeleton animation="wave" />
                    </td>
                  </tr>
                ))
              : // Render actual data when not loading
                (rowsPerPage > 0
                  ? data.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : data
                ).map((item, index) => (
                  <tr
                    className="bg-white border-b hover:bg-gray-50"
                    key={index}
                  >
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap ">
                      <div className="ps-3">
                        <div className="text-base text-gray-700 font-semibold ">
                          {item.ip}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap text-right">
                      <div className="ps-3">
                        <div className="text-base text-gray-700 font-semibold ">
                          {moment
                            .utc(item.date)
                            .format("MMM DD yyyy : hh:mm A")}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            <TablePagination
              sx={{ bgcolor: "white" }}
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={12}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoginHistory;
