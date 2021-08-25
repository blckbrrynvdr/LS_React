import {Input, InputLabel} from "@material-ui/core";
import PropTypes from "prop-types";
import "./Common.css";

const CommonInput = (props) => {
  return (
    <div data-testid="root" className={`commonInput ${props.className}`}>
      <InputLabel className="commonInput__label" htmlFor={props.id} data-testid="label">{props.labelText}</InputLabel>
      <Input className="commonInput__field" id={props.id} type={props.type} name={props.name} data-testid="input"/>
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
