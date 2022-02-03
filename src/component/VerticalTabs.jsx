import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./utils/TabPanel";
import ReceipePage from "./receipe/ReceipePage";
import LogAnalyserPage from "./logAnalyser/LogAnalyserPage";
import { useStyles } from "./utils/utils";

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "f2f2f2",
        display: "flex",
      }}
    >
      <Tabs
        style={{
          marginTop: 80,
          height: 200,
        }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="CGI Assessment"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          className={value === 0 ? classes.active_tab : classes.default_tab}
          label="Test 1 - Receipes"
          {...a11yProps(0)}
        />
        <Tab
          className={value === 1 ? classes.active_tab : classes.default_tab}
          label="Test 2 - Log Analyser"
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ReceipePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LogAnalyserPage />
      </TabPanel>
    </Box>
  );
}
