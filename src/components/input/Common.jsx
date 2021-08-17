const Nav = (props) => {
  return (
    <div className={`commonInput ${props.className}`}>
      <label htmlFor={ props.id }>{ props.labelText }</label>
      <input id={ props.id } type={ props.type } name={ props.name } />
    </div>
  );
};

export default Nav;
