"use client";
import { Skeleton, TablePagination } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const DownloadHistory = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
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
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Download Products History
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from(Array(5)).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <Skeleton variant="rectangular" height={150} />
              </div>
            ))
          : (rowsPerPage > 0
              ? data.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : data
            ).map((item, index) => (
              <div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                key={index}
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Type:</strong> {item.type}
                </p>
                <p className="text-sm text-green-600 mb-2">
                  <strong>Name:</strong> {item.name}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>IP:</strong> {item.ip}
                </p>
                <p className="text-sm text-right text-gray-500">
                  {moment.utc(item.date).format("MMM DD yyyy : hh:mm A")}
                </p>
              </div>
            ))}
      </div>
      <div className="mt-6">
        <TablePagination
          sx={{ bgcolor: "white" }}
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={12}
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          component="div"
        />
      </div>
    </div>
  );
};

export default DownloadHistory;
