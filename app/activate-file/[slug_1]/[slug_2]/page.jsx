"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Snackbar,
  Typography,
  Container,
  Box,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import { ContentCopy } from "@mui/icons-material";

function ActivationPage({ params }) {
  const [activationData, setActivationData] = useState({
    status: null,
    masterKey: "",
    message: "",
  });
  const [ip, setIp] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchIP = async () => {
    try {
      const response = await axios.get(
        `/api/my-ip`
      );
      setIp(response.data);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

  const handleActivation = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/te-activate-master`,
        {
          key1: params.slug_1,
          key2: params.slug_2,
          ip: ip,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      setActivationData(response.data);
    } catch (error) {
      console.error("Activation error:", error);
      setActivationData({
        status: false,
        masterKey: "",
        message: "Activation failed: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(activationData.masterKey)
      .then(() => setOpenSnackbar(true))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={3} style={{ padding: "2rem", borderRadius: "12px" }}>
        <Typography variant="h4" fontWeight={'bold'} textAlign={'center'} gutterBottom>
        Get Master Key to Activate Test Engine File.
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          {activationData.status === null ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleActivation}
              startIcon={loading ? <CircularProgress size={20} /> : null}
              fullWidth
              disabled={loading}
              style={{ marginTop: "1rem" }}
            >
              {loading ? "Activating..." : "Activate Master Key"}
            </Button>
          ) : activationData.status ? (
            <>
              <Typography variant="h5" gutterBottom style={{ marginTop: "1rem" }}>
                Activation Successful
              </Typography>
              <TextField
                value={activationData.masterKey}
                variant="outlined"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                style={{ marginTop: "1rem" }}
              />
              <Button
                variant="contained"
                color="primary"
                startIcon={<ContentCopy />}
                onClick={handleCopy}
                style={{ marginTop: "1rem" }}
                fullWidth
              >
                Copy Master Key
              </Button>
            </>
          ) : (
            <Alert severity="error" style={{ marginTop: "1rem", width: "100%" }}>
              {activationData.message}
            </Alert>
          )}
        </Box>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Master key copied to clipboard"
      />
    </Container>
  );
}

export default ActivationPage;
