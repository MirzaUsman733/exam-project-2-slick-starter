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
  Typography,
  Chip,
} from "@mui/material";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function Row({ row }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow hover>
        <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>
          <Box display="flex" alignItems="center">
            <IconButton size="small" onClick={() => setOpen(!open)}>
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <Typography variant="subtitle1" sx={{ ml: 1 }}>
              {row.product_vendor ? row.product_vendor : row.product_type_detail}
            </Typography>
          </Box>
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: "bold" }}>
          #{row.product_invoice_id}
        </TableCell>
        <TableCell align="right">
          <Chip
            label={row.product_expired ? "Expired" : "Active"}
            color={row.product_expired ? "error" : "success"}
          />
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2, borderLeft: "4px solid #1976d2", pl: 2 }}>
              <Typography variant="h6" gutterBottom>
                {row.product_name}
              </Typography>
              <Table size="small" aria-label="product details">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle2">File</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle2">Expiry Date</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row?.product_access?.map((product) => (
                    <TableRow key={product.anchor}>
                      <TableCell>
                        <Link href={product.url.startsWith("http") ? product.url : `https://certsgang.com${product.url}`}>
                          <button className="relative inline-flex items-center justify-center p-1.5 mb-2 me-2 overflow-hidden text-sm font-medium text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition">
                            {product.anchor}
                          </button>
                        </Link>
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

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/products`,
          {
            headers: {
              "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
              Authorization: `Bearer ${loginResponse._token}`,
            },
          }
        );
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
    <TableContainer component={Paper} sx={{ maxWidth: 900, mx: "auto", mt: 5, p: 3, boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
        Products
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                Vendor Name
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                Invoice Id
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                Status
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
