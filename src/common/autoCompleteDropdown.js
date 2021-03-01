/* eslint-disable no-use-before-define */
import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
// import Autocomplete from "@material-ui/lab/Autocomplete";

export default function AutoCompleteDropdown(props) {
  return (
    // <Autocomplete
    //   id="card-select"
    //   style={{ width: 300 }}
    //   options={props.value}
    //   onChange={props.changeHandler}
    //   autoHighlight
    //   getOptionLabel={(option) => option.label}
    //   renderOption={(option) => <React.Fragment>{option.label}</React.Fragment>}
    //   renderInput={(params) => (
    //     <TextField {...params} label={props.labelName} variant="outlined" />
    //   )}
    // />
    <FormControl>
      <InputLabel id="demo-simple-select-label">{props.labelName}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        onChange={props.handleChange}
      >
        {props.value.map((individualValue) => (
          <MenuItem value={individualValue}>{individualValue}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
