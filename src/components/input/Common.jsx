import {Input, InputLabel} from "@material-ui/core";

const Nav = (props) => {
  return (
    <div className={`commonInput ${props.className}`}>
      <InputLabel htmlFor={props.id}>{props.labelText}</InputLabel>
      <Input id={props.id} type={props.type} name={props.name} />
    </div>
  );
};

export default Nav;
