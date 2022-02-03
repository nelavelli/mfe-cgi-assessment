import React, { useEffect, useReducer, useState } from "react";
import { fetchAPIResponse } from "../../service/APIService";
import RadioButtonsGroup from "../utils/RadioButtonsGroup";
import TableView from "../utils/TableView";
import useAPIError from "../utils/UseAPIError";
import { useStyles } from "../utils/utils";

const columns = [
  {
    id: "count",
    label: "Times Repeated",
    width: 200,
    align: "center",
  },
  {
    id: "description",
    label: "Error Description",
    width: 900,
    align: "center",
  },
];

const radioGroup = {
  groupLabel: "Log Type",
  value: "DEBUG",
  direction: true,
  options: [
    {
      label: "Trace",
      value: "TRACE",
    },
    {
      label: "Debug",
      value: "DEBUG",
    },
    {
      label: "Info",
      value: "INFO",
    },
    {
      label: "Warn",
      value: "WARN",
    },
    {
      label: "Error",
      value: "ERROR",
    },
    {
      label: "Fatal",
      value: "FATAL",
    },
  ],
};

export default function LogAnalyserPage() {
  const { addError } = useAPIError();
  const classes = useStyles();
  const [logInfo, setLogInfo] = useState([]);

  const LOG_ANALYSER_ENDPOINT = "loganalyser/";

  useEffect(() => {
    getLogInfo("DEBUG");
  }, []);

  async function getLogInfo(value) {
    try {
      const response = await fetchAPIResponse(
        LOG_ANALYSER_ENDPOINT + value,
        addError
      );
      setLogInfo(response.logInfo);
    } catch (error) {
      // console.log("exception while calling log service ", error);
      setLogInfo([]);
    }
  }

  const handleChanges = (value) => {
    getLogInfo(value);
  };

  return (
    <div className={classes.marginAlign}>
      <RadioButtonsGroup
        group={radioGroup}
        handleChanges={handleChanges}
        classes={classes}
      />
      <TableView
        rows={logInfo ? logInfo : []}
        classes={classes}
        columns={columns}
      />
      ;
    </div>
  );
}
