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

export default Nav;
