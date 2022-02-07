import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import TableView from "../utils/TableView";

const columns = [
  {
    id: "thumbnail",
    label: "Recipe",
    width: 350,
    align: "center",
    image: true,
  },
  { id: "title", label: "Item Name", width: 200, align: "center" },
  {
    id: "ingredients",
    label: "Ingredients",
    width: 400,
    align: "center",
    format: (value) => value.sort().join(", ").toString(),
  },
  {
    id: "href",
    label: "Website Link",
    width: 150,
    align: "left",
    htmlString: (url) => (
      <Stack direction="row" spacing={2}>
        <Button
          width="100"
          align="right"
          variant="contained"
          target="_blank"
          href={url}
          endIcon={<SendIcon />}
        >
          Link
        </Button>
      </Stack>
    ),
  },
];

export default function RecipeList({ rows, classes }) {
  return <TableView rows={rows} classes={classes} columns={columns} />;
}

RecipeList.propTypes = {
  rows: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};
