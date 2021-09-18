import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { IconButton, FormHelperText } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    borderBottom: "2px solid #bbb",
    boxShadow: "none",
    borderRadius: "0",
    position: "relative",
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
    border: "none",
    padding: "20px 5px",
    width: '100%',
    '&::before, &::after': {
      display: 'none',
    },
    '&:focus': {
      outline: 0,
    }
  },
  selectIcon: {
    display: 'none',
  },
  buttons: {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
  },
  helperText: {
    bottom: "-1.5em",
  }
}));

const GoogleInput = forwardRef((props,ref) => {
  const classes = useStyles();
 

  return (
    <Paper className={`${classes.root}`}>
      {props.startIcon}
      
        <select 
          className={classes.select} 
          name={props.name}
          onChange={(e) => {
            props.onChange(e);
            props.changeHandler(e);
          }}
          value={props.value}
          ref={ref}
        >
          <option value="">{props.placeholder}</option>
          {props.addresses.map((elem) => 
            (<option key={elem.id} value={elem.value}>{elem.value}</option>)
          )}
        </select>
        {props.helperText && 
          <FormHelperText 
            error={props.error} 
            id="my-helper-text"
            className={classes.helperText}
          >
            {props.helperText}
          </FormHelperText>}
        <div className={classes.buttons}>
          <IconButton type="button" onClick={() => {props.clear(props.name)}} className={classes.iconButton} aria-label="search">
            <CloseIcon color="disabled"/>
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
        </div>
    </Paper>
  );
});

export default GoogleInput;