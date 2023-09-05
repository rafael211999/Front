import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
// import Navbar from './components/navbar/Navbar';
import Rodape from './components/rodape/Rodape'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App
    nome = {"Rafael"}
    /> */}
    {/* <Navbar 
     item0={"Home"}
     item1={"About"}
     item2={"Tech Stack"}
     item3={"Projects"}
     item4={"Contact"}
    /> */}

    <Rodape
    item1= {"Primeira"}
    item2= {"Segundo"}
    item3= {"Terceiro"}
    item4= {"Primeiro"}
    item5= {"Segundo"}
    />
     <Rodape
     item1={"Primeiro"}
     item2={"Segundo"}
     item4= {"Primeiro"}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
