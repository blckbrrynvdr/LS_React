import {Input, InputLabel, FormHelperText} from "@material-ui/core";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import "./Common.css";

const CommonInput = forwardRef((props, ref) => {

  return (
    <div data-testid="root" className={`commonInput ${props.className}`}>
      <InputLabel 
        className="commonInput__label" 
        htmlFor={props.id} 
        data-testid="label"
      >
        {props.labelText}
      </InputLabel>
      <Input 
        className="commonInput__field" 
        id={props.id} 
        type={props.type} 
        name={props.name} 
        value={props.value} 
        onInput={props.onInput} 
        inputRef={ref}
        onChange={props.onChange}
        data-testid="input"
        error={props.error}
        defaultValue={props.defaultValue}
        />
        {props.helperText && 
          <FormHelperText 
            error={props.error} 
            id="my-helper-text"
          >
            {props.helperText}
          </FormHelperText>}
    </div>
  );
});


CommonInput.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
}

export default CommonInput;
