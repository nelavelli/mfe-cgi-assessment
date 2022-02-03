import React from "react";
import VerticalTabs from "./component/VerticalTabs";
import CssBaseline from "@mui/material/CssBaseline";
import { useStyles } from "./component/utils/utils";
import APIErrorNotification from "./component/utils/APIErrorNotification";
import APIErrorProvider from "./context/APIErrorProvider.jsx";
function App() {
  const classes = useStyles();
  return (
    <APIErrorProvider>
      <div className={classes.container}>
        <CssBaseline />
        <VerticalTabs />
        <APIErrorNotification />
      </div>
    </APIErrorProvider>
  );
}

export default App;
