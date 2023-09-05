import "./Rodape.css";

function Rodape({ item1, item2, item3, item4, item5 }) {
  return (
    <div className="Container">
      <div className="Rodape1">
        <div className="Titulo">Titulo 1</div>
        <div className="filhos">{item1}</div>
        <div className="filhos">{item2}</div>
        <div className="filhos">{item3}</div>
      </div>
      <div className="Rodape2">
        <div className="Titulo">Titulo 2</div>
        <div className="filhos">{item4}</div>
        <div className="filhos">{item5}</div>
      </div>
    </div>
  );
}

export default Rodape;
