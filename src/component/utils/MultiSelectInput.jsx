import React, { useState } from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { MenuProps } from "./utils";

export default function MultiSelectInput({
  options,
  classes,
  onOptionsChange,
}) {
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = (event) => {
    const value = event.target.value;
    value[value.length - 1] === "all"
      ? setSelected(selected.length === options.length ? [] : options)
      : setSelected(value);
    onOptionsChange(value);
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="mutiple-select-label">Select Ingredients</InputLabel>
      <Select
        key={options.length}
        labelId="mutiple-select-label"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        <MenuItem
          value="all"
          classes={{
            root: isAllSelected ? classes.selectedAll : "",
          }}
        >
          <ListItemIcon>
            <Checkbox
              classes={{ indeterminate: classes.indeterminateColor }}
              checked={isAllSelected}
              indeterminate={
                selected.length > 0 && selected.length < options.length
              }
              style={{
                color: "#2B5770",
              }}
            />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.selectAllText }}
            primary="Select All"
          />
        </MenuItem>
        {options &&
          options.map((option) => (
            <MenuItem key={option} value={option}>
              <ListItemIcon>
                <Checkbox
                  checked={selected.indexOf(option) > -1}
                  style={{
                    color: "#2B5770",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={option} />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

MultiSelectInput.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  onOptionsChange: PropTypes.func.isRequired,
};
