"use client";
import { Skeleton, TablePagination } from "@mui/material";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Invoices = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/invoices`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setData(response.data);
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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Your Invoices
      </h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gradient-to-r from-blue-500 to-blue-500 text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">
                Invoice ID
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from(Array(5)).map((_, index) => (
                  <tr key={index} className="bg-white">
                    <td colSpan="3" className="px-6 py-4">
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
                ).map((item) => (
                  <tr
                    key={item.invoice_id}
                    className="border-b last:border-none hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/invoice/${item.invoice_id}`}>
                        <div className="font-medium text-blue-600 hover:underline">
                          #{item.invoice_id}
                        </div>
                        <div className="text-sm text-gray-500">
                          {moment(item.invoice_date).format(
                            "MMM DD, YYYY | hh:mm A"
                          )}
                        </div>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">${item.invoice_amount}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span
                          className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            item.invoice_paid ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></span>
                        <span className="text-gray-700">
                          {item.invoice_paid ? "Paid" : "Unpaid"}
                        </span>
                      </div>
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

export default Invoices;
