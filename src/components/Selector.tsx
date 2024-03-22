import * as React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Selector = ({setSelect}) => {
  return (
    <div style={{ margin: "auto" }}>
      <FormControl>
        <h5>Select an option</h5>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="point"
          name="radio-buttons-group"
        >
          <FormControlLabel value="point" control={<Radio />} label="Point" onClick={()=> setSelect("point")}/>
          <FormControlLabel value="line" control={<Radio />} label="Line" onClick={()=> setSelect("line")}/>
          <FormControlLabel value="polygon" control={<Radio />} label="Polygon" onClick={()=> setSelect("polygon")}/>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Selector;
