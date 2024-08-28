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

  const fetchData = async () => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/invoices`, {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          Authorization: `Bearer ${loginResponse._token}`,
        },
      });
      console.log('Response Data: ',response.data)
      setData(response.data);
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
    <div className="max-w-5xl mx-auto p-6">
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs uppercase bg-blue-500">
            <tr>
              <th scope="col" className="px-10 py-3">
                Invoice Id
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {!data &&
              Array.from(Array(5)).map((_, index) => (
                <tr key={index}>
                  <td colSpan="2">
                    <Skeleton animation="wave" />
                  </td>
                </tr>
              ))}
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((item) => (
              <tr className="bg-white border-b hover:bg-gray-50">
                <th
                  scope="row"
                  className="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Link href={"/"}>
                    <div className="ps-3">
                      <div className="text-base text-gray-700 font-semibold hover:text-blue-500">
                        # {item?.invoice_id}
                      </div>
                      <div className="font-normal text-gray-500">
                        {moment(item?.invoice_date).format(
                          "MMM DD yyyy : hh:mm A"
                        )}
                      </div>
                    </div>
                  </Link>
                </th>
                <td className="px-6 py-4">
                  <div style={{ color: "gray" }}>${item?.invoice_amount}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div
                      style={{
                        height: "10px",
                        width: "10px",
                        borderRadius: "50%",
                        backgroundColor: item.invoice_paid ? "#34D399" : "red",
                        marginRight: "0.5rem",
                      }}
                    ></div>
                    <div style={{ color: "gray" }}>
                      {item.invoice_paid ? "Paid" : "Unpaid"}
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

export default Invoices;
