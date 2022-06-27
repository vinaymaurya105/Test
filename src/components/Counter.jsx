import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 2);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <Typography variant="h5"> Counter - {count}</Typography>
      <Button variant="contained" onClick={incrementCount}>
        Increment
      </Button>
      <Button variant="contained" onClick={decrementCount}>
        Decrement
      </Button>
    </>
  );
}

export default Counter;
