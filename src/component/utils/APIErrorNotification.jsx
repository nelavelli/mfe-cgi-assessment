import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import useAPIError from "./UseAPIError.jsx";
import { Box, Typography } from "@mui/material";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function APIErrorNotification() {
  const { error, removeError } = useAPIError();

  const handleClose = () => {
    removeError();
  };

  return (
    <Box>
      <Dialog
        open={!!error}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          style={{ cursor: "move", background: "red" }}
          id="draggable-dialog-title"
        >
          <Typography variant="h4" color="#f2f2f2">
            Application Error Occrured.
          </Typography>
        </DialogTitle>
        <DialogContent style={{ background: "#f2f2f2", height: 200 }}>
          <DialogContentText>
            <Typography variant="h6" marginTop={5} color="blue">
              {error && error.message && error.message}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ background: "#f2f2f2" }}>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
