import {Input, InputLabel} from "@material-ui/core";
import PropTypes from "prop-types";

const CommonInput = (props) => {
  return (
    <div className={`commonInput ${props.className}`}>
      <InputLabel htmlFor={props.id}>{props.labelText}</InputLabel>
      <Input id={props.id} type={props.type} name={props.name} />
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
