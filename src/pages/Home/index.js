import React from "react";
import './style.css'
import logo from './logo.png';
const Home = ()=>{
    return (
        <div className="container">
            <img src={logo} alt="Logo da Pastelarias"/>
            <h1>Bem Vindo a Pastelaria do Junior</h1>
            <h3>Faça já seu pedido ou encomenda de Mini Salgados</h3>
            <a href="/minis-salgados">Faça já o seu pedido !</a>
        </div>
    );
}
export default Home;