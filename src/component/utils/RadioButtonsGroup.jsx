import * as React from "react";
import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup({ group, handleChanges, classes }) {
  const [value, setValue] = React.useState(group.value);

  const handleChange = (event) => {
    setValue(event.target.value);
    handleChanges(event.target.value);
  };

  return (
    <FormControl className={classes.formControlRadioGroup}>
      <FormLabel id="cgi-radio-buttons-group-label">
        {group.groupLabel}
      </FormLabel>
      <RadioGroup
        row={group.direction}
        aria-labelledby="cgi-controlled-radio-buttons-group"
        name="cgi-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {group.options.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
RadioButtonsGroup.propTypes = {
  group: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleChanges: PropTypes.func.isRequired,
};
