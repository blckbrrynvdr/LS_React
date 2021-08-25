import {Input, InputLabel} from "@material-ui/core";
import PropTypes from "prop-types";

const CommonInput = (props) => {
  return (
    <div data-testid="root" className={`commonInput ${props.className}`}>
      <InputLabel htmlFor={props.id} data-testid="label">{props.labelText}</InputLabel>
      <Input id={props.id} type={props.type} name={props.name} data-testid="input"/>
    </div>
  );
};


CommonInput.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
}

export default CommonInput;
