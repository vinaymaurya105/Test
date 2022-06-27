import React, { useState, useEffect } from "react";

import {
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  Collapse,
  IconButton,
  Avatar,
  Radio,
  TextField,
  Box,
  InputAdornment,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

function ColapsibleList(props) {
  const { title } = props;
  const [open, setOpen] = useState(true);
  const [data, setData] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    console.log(title);
  };
  useEffect(() => {
    axios
      .get("https://testapi.buopso.com/lms/owners")
      .then((res) => {
        // console.log(res.data)
        setData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box style={{ width: 500 }}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItem button onClick={handleClick}>
          <ListItemText primary={title} />
          {open ? <ExpandLess /> : <ExpandMore />}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <TextField
              fullWidth
              placeholder="Search.."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={() => {
                        console.log("search");
                      }}
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {data.map((item) => {
              const { id, firstName, lastName } = item;
              const initial = firstName[0].toUpperCase();
              return (
                <ListItem button key={id}>
                  <Radio />
                  <Avatar style={{ marginRight: 10 }}> {initial}</Avatar>
                  <ListItemText primary={firstName + " " + lastName} />
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </List>
    </Box>
  );
}

export default ColapsibleList;
