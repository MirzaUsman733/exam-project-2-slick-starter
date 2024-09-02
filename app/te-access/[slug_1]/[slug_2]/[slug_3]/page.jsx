/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Snackbar,
  SnackbarContent,
  TextField,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ExpandMore, FileCopyOutlined, DownloadOutlined } from '@mui/icons-material';

const Page = ({ params }) => {
  const [teAccess, setTeAccess] = useState({});
  const [copiedKeyIndex, setCopiedKeyIndex] = useState(-1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyToClipboard = (key, index) => {
    navigator.clipboard.writeText(key);
    setCopiedKeyIndex(index);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
        if (!loginResponse?._token) {
          router.push("/login");
          return;
        }
        if (loginResponse) {
          try {
            const response = await axios.get(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/te-access/${params.slug_1}/${params.slug_2}/${params.slug_3}`,
              {
                headers: {
                  "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
                  Authorization: `Bearer ${loginResponse._token}`,
                },
              }
            );
            setTeAccess(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      }
    };

    fetchData();
  }, [params.id_one, params.id_two, params.id_three]);
  console.log(teAccess)
  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "#4caf50",
            color: "white",
          }}
          message="Key copied to clipboard!"
        />
      </Snackbar>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={6}
            sx={{
              p: 4,
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              color: "white",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    fontWeight={700}
                    sx={{
                    //   background: "linear-gradient(to right, #30cfd0 0%, #330867 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "#2196F3",
                    }}
                  >
                    Test Engine Access
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={500}
                    mt={2}
                  >
                    {teAccess.exam_code} {teAccess.exam_vendor}{" "}
                   {teAccess?.exam_name &&  <span>"{teAccess.exam_name}"</span>}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ mt: 3 }}>
                  {teAccess.keys && teAccess.keys.length > 0 ? (
                    teAccess.keys.map((item, i) => (
                      <Accordion
                        key={i}
                        sx={{
                          mb: 2,
                          borderRadius: "12px",
                          overflow: "hidden",
                          background: "rgba(255, 255, 255, 0.2)",
                          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMore style={{ color: "#000" }} />}
                          sx={{
                            background: "rgba(255, 255, 255, 0.3)",
                            backdropFilter: "blur(8px)",
                            padding: "0 16px",
                            color: "black",
                          }}
                        >
                          <div className="flex flex-col">
                          <Typography variant="h6">Activation Key {i + 1}</Typography>
                          <Typography variant="body" sx={{color: 'rgb(185 28 28)'}}> {item.activation_key_used === true ? '' : 'Activication Key is Already used' } </Typography>
                          </div>
                        </AccordionSummary>
                        <AccordionDetails sx={{ background: "rgba(255, 255, 255, 0.1)", padding: 2 }}>
                          <TextField
                            size="small"
                            variant="outlined"
                            label="Activation Keys"
                            value={`${item.purchase_key}|${item.activation_key}`}
                            disabled
                            fullWidth
                            InputProps={{
                              readOnly: true,
                              endAdornment: (
                                <IconButton
                                  onClick={() =>
                                    handleCopyToClipboard(
                                      `${item.purchase_key}|${item.activation_key}`,
                                      i
                                    )
                                  }
                                >
                                  <FileCopyOutlined style={{ color: "#000" }} />
                                </IconButton>
                              ),
                            }}
                            sx={{ mt: 1, backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "8px" }}
                          />
                        </AccordionDetails>
                      </Accordion>
                    ))
                  ) : (
                    <Card
                      sx={{
                        mt: 2,
                        p: 3,
                        borderRadius: "12px",
                        background: "rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                        backdropFilter: "blur(10px)",
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      <Typography>No activation keys available.</Typography>
                    </Card>
                  )}
                </Box>

                <Box sx={{ mt: 4, textAlign: "center" }}>
                  {teAccess.te_file && (
                    <Link href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${teAccess.te_file}`} passHref>
                      <Button
                        variant="contained"
                        sx={{
                          background: "linear-gradient(135deg, #2196F3 0%, #2196F3 100%)",
                          color: "white",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          borderRadius: "8px",
                          "&:hover": {
                            background: "linear-gradient(135deg, #2196F3 0%, #2196F3 100%)",
                          },
                          mr: 2,
                        }}
                        startIcon={<DownloadOutlined />}
                      >
                        Download .dumpscollections
                      </Button>
                    </Link>
                  )}
                  {/* {teAccess.te_file_zip && (
                    <Link href={`https://certsgang.com${teAccess.te_file_zip}`} passHref>
                      <Button
                        variant="contained"
                        sx={{
                            background: "linear-gradient(135deg, #2196F3 0%, #2196F3 100%)",
                            color: "white",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          borderRadius: "8px",
                          "&:hover": {
                            background: "linear-gradient(135deg, #0072ff 0%, #00c6ff 100%)",
                          },
                        }}
                        startIcon={<DownloadOutlined />}
                      >
                        Download .zip File
                      </Button>
                    </Link>
                  )} */}
                </Box>

                <Box
                  sx={{
                    mt: 5,
                    p: 4,
                    borderRadius: "15px",
                    background: "rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(10px)",
                    textAlign: "justify",
                    color: "black"
                  }}
                >
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    How To Use?
                  </Typography>
                  <Typography variant="body1">
                    Download the DumpsCollectionTest Engine Simulator and install it. Then, download the premium
                    .dumpscollectionfile using the buttons above. You will receive a .zip file. Unzip it and
                    add it to the DumpsCollectionTest Engine Simulator. Activate the premium .dumpscollectionfile
                    with the provided purchase and activation keys.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Page;
