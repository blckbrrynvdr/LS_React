import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = (props) => {

  return (
    <nav data-testid="nav" className="nav">
      {props.buttons.map((button) => {
        const params = button.clickHandler ? {onClick: () => { button.clickHandler() }} : {};
          return (
            <Link className="nav__button" key={button.id} to={button.link} {...params}>
              {button.name}
            </Link>
          );
      })}
    </nav>
  );
};

Nav.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default Nav;
