"use client";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React, { useEffect, useState } from "react";

// Alert component wrapper
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = ({ message }) => {
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    if (message) {
      setNotificationOpen(true);
      const timer = setTimeout(() => {
        setNotificationOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <Snackbar
      open={notificationOpen}
      autoHideDuration={3000}
      onClose={() => setNotificationOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={() => setNotificationOpen(false)} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
