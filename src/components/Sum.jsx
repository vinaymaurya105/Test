import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";

function Sum() {
  const [number, setNumber] = useState("");
  const [sum, setSum] = useState(0);

  const handleSum = () => {
    let n = Number(number);

    let sumOfNumber = (n * (n + 1)) / 2;

    setSum(sumOfNumber);
  };

  const handleChange = (e) => {
    setNumber(e.target.value);

    setSum("");
  };
  return (
    <Box>
      <TextField
        variant="standard"
        placeholder="Enter Number to sum"
        value={number}
        onChange={handleChange}
        error={isNaN(number)}
        helperText={isNaN(number) && "Enter a valid Number"}
        autoFocus={true}
      ></TextField>

      <Typography>Sum - {sum}</Typography>
      <Button variant="contained" onClick={handleSum}>
        Sum
      </Button>
    </Box>
  );
}

export default Sum;
