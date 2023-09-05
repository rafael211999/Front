import "./Navbar.css";

function Navbar({item0, item1, item2, item3, item4}) {
  return (
    <div className="Container">
      <div className="Logo">teste</div>
      <div className="Navbar">
        <div className="filhos">{item0}</div>
        <div className="filhos">{item1}</div>
        <div className="filhos">{item2}</div>
        <div className="filhos">{item3}</div>
        <div className="filhos">{item4}</div>
      </div>
    </div>
  );
}

export default Navbar;
