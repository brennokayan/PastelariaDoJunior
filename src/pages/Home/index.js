import React, {useEffect, useState} from "react";
import './style.css'
import logo from './logo.png';
const Home = ()=>{
    var Horario = "Horário de atendimento das 15:00 ás 20:00"
    const [link, setLink] = useState("")
    const [abertos, setAbertos] = useState("")
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [estiloAtendimento, setEstiloAtendimento] = useState("fechado")
    

    function ShowTime() {
        
        var time = new Date();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var second = time.getSeconds();
        if (hour < 10) hour = "0" + hour;
        if (minute < 10) minute = "0" + minute;
        if (second < 10) second = "0" + second;
        setHours(hour)
        setMinutes(minute)
        setSeconds(second)
        
    }
    function initTime(){
        setInterval(ShowTime, 1000)
        if(hours >= 20){
            setAbertos("Estamos fechados no momento.");

            setLink("/")
        }
        if(hours < 15){
            setAbertos("Ainda não iniciamos nossos atendimentos no momento aguarde por alguns instante.");
            setLink("/")
        }
        if(hours <20 && hours >=15){
            setAbertos("Estamos Aberto!");
            setEstiloAtendimento("aberto")
            setLink("/minis-salgados")
        }
    }

    
    useEffect(() => {
        initTime();
    });
    return (
        <div className="container">
            <img src={logo} alt="Logo da Pastelarias"/>
            <h1>Bem Vindo a Pastelaria do Junior</h1>
            <h4><p className={estiloAtendimento}>{abertos}</p>{Horario}<br/>{hours+" : "+minutes+" : "+seconds}</h4>
            <a href={link}>Faça já o seu pedido ou encomenda!</a>
        </div>
    );
}
export default Home;