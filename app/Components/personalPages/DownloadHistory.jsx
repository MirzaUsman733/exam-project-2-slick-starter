"use client";
import { Skeleton, TablePagination } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const DownloadHistory = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/download-history`,
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
    <div className="container max-w-5xl mx-auto p-6 my-10">
      <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs uppercase bg-gradient-to-r from-blue-500 to-blue-500">
            <tr>
              <th scope="col" className="px-10 py-3">
                Download Products History
              </th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from(Array(5)).map((_, index) => (
                  <tr key={index}>
                    <td colSpan="2">
                      <Skeleton animation="wave" />
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
                    className="bg-white border-b hover:bg-gray-50"
                    key={index}
                  >
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap ">
                      <div className="ps-3 flex justify-between">
                        <div className="text-base text-blue-700 font-bold ">
                          {item.title}
                        </div>
                        <div className="font-bold">({item.type})</div>    
                      </div>
                      <div className="ps-3">
                        <div className="text-base text-green-700 font-semibold ">
                          {item.name}
                          
                        </div>
                      </div>
                      <div className="ps-3">
                        <div className="text-base text-gray-700 font-semibold ">
                          IP: {item.ip}
                        </div>
                      </div>
                      <div className="ps-3">
                        <div className="text-base text-right text-gray-700 font-semibold ">
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

export default DownloadHistory;
