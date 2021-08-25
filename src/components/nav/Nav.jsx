import PropTypes from "prop-types";

const Nav = (props) => {
  return (
    <nav className="nav">
      {props.buttons.map((button) => (
        <button
          className="nav__button"
          key={button.id}
          onClick={() => {
            button.clickHandler(button.link);
          }}
        >
          {button.name}
        </button>
      ))}
    </nav>
  );
};

Nav.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    clickHandler: PropTypes.func.isRequired,
  })).isRequired,
};


export default Nav;
