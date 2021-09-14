import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { Select, MenuItem} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    borderBottom: "2px solid #bbb",
    boxShadow: "none",
    borderRadius: "0",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  borderHover: {
    borderColor: '#2D7EF7',
  },
  borderTransparent: {
    borderColor: 'tranpsrent',
  },

  select: {
    width: '100%',
    '&::before, &::after': {
      display: 'none',
    }
  },
  selectIcon: {
    display: 'none',
  }
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
 
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper className={`${classes.root}`}>
      {props.startIcon}
      <Select
          labelId="demo-controlled-open-select-label"
          id="demo-simple-select"
          displayEmpty
          name={props.name}
          className={classes.select}
          classes={{icon: classes.selectIcon}}
          open={open}
          onChange={props.changeHandler}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.value}
        >
          <MenuItem value="">
            {props.placeholder}
          </MenuItem>
          {props.addresses.map((elem) => 
            (<MenuItem key={elem.id} value={elem.value}>{elem.value}</MenuItem>)
          )}
        </Select>
      <IconButton type="button" onClick={() => {props.clear(props.name)}} className={classes.iconButton} aria-label="search">
        <CloseIcon color="disabled"/>
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="button" color="primary" onClick={handleOpen} className={classes.iconButton} aria-label="directions">
        <KeyboardArrowDownIcon style={{ color: '#000000' }}/>
      </IconButton>
    </Paper>
  );
}