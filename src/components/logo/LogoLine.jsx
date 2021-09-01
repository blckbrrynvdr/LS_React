import logo from "../../assets/img/logo-line.svg";

const LogoLine = (props) => {
  const className = props.className ?? props.className;
  return (
    <div className={`logo-line ${className}`}>
      <img src={logo} alt="lofttaxi"/>
    </div>
  );
};

export default LogoLine;
