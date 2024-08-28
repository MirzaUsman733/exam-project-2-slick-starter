/* eslint-disable @next/next/no-async-client-component */
"use client";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from "@mui/material";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Row({ row }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {/* {open ? (
              <Icon
                icon="icon-park-outline:up"
                width="1.2em"
                height="1.2em"
                style={{ color: "gray" }}
              />
            ) : (
              <Icon
                icon="icon-park-outline:down"
                width="1.2em"
                height="1.2em"
                style={{ color: "gray" }}
              />
            )} */}
          </IconButton>{" "}
          {row.product_vendor ? row.product_vendor : row.product_type_detail}
        </TableCell>
        <TableCell align="center">#{row.product_invoice_id}</TableCell>
        <TableCell align="right">
          <div>
            <div
              style={{
                color: row.product_expired ? "red" : "green",
                textAlign: "right",
              }}
            >
              <b>{row.product_expired ? "Expired" : "Active"}</b>
            </div>
          </div>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="body2"
                fontSize={16}
                gutterBottom
                component="div"
              >
                <b>{row.product_name}</b>
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      File
                    </TableCell>
                    <TableCell align="right">Expirey Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row?.product_access?.map((product) => (
                    <TableRow key={product.anchor}>
                      <TableCell>
                        {product.type === "download_pdf" ? (
                          <Link
                            href={`https://api.dumpsboss.com${product.url}`}
                          >
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-300 group-hover:from-gray-800 group-hover:to-blue-300 hover:text-white dark:text-white ">
                              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-800 hover:text-white rounded-md group-hover:bg-opacity-0">
                                {product.anchor}
                              </span>
                            </button>
                          </Link>
                        ) : product.type === "te_access" ? (
                          <Link
                            href={`/te-access/${product.prams.payment_id}/${product.prams.exam_id}/${product.prams.rel_id}`}
                          >
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-300 group-hover:from-gray-800 group-hover:to-blue-300 hover:text-white dark:text-white ">
                              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-800 hover:text-white rounded-md group-hover:bg-opacity-0">
                                {product.anchor}
                              </span>
                            </button>
                          </Link>
                        ) : product.type === "sc_access" ? (
                          <Link
                            href={`/sc-access/${product.prams.payment_id}/${product.prams.exam_id}`}
                          >
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-300 group-hover:from-gray-800 group-hover:to-blue-300 hover:text-white dark:text-white ">
                              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-800 hover:text-white rounded-md group-hover:bg-opacity-0">
                                {product.anchor}
                              </span>
                            </button>
                          </Link>
                        ) : product.type === "unlimited_te_access" ? (
                          <Link
                            href={`/unlimited-te-access/${product.prams.payment_id}/${product.prams.rel_id}`}
                          >
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-300 group-hover:from-gray-800 group-hover:to-blue-300 hover:text-white dark:text-white ">
                              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-800 hover:text-white rounded-md group-hover:bg-opacity-0">
                                {product.anchor}
                              </span>
                            </button>
                          </Link>
                        ) : product.type === "unlimited_pdf_access" ? (
                          <Link
                            href={`/unlimited-pdf-access/${product.prams.payment_id}/${product.prams.rel_id}`}
                          >
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-300 group-hover:from-gray-800 group-hover:to-blue-300 hover:text-white dark:text-white ">
                              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-800 hover:text-white rounded-md group-hover:bg-opacity-0">
                                {product.anchor}
                              </span>
                            </button>
                          </Link>
                        ) : (
                          ""
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {moment(row.product_expiry_date).format("LL")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      try {
        const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
        if (!loginResponse?._token) {
          return;
        }

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/products`, {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }

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
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow className="text-white bg-gradient-to-br from-gray-800 to-blue-400">
            <TableCell align="left" sx={{ color: "white" }}>
              <b>Vendor Name</b>
            </TableCell>
            <TableCell align="center" sx={{ color: "white" }}>
              <b>Invoice Id</b>
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              <b>Status</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? products.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : products
          ).map((row) => (
            <Row key={row.product_invoice_id} row={row} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default Products;
