import React, { useState, useEffect  } from 'react';
import './style.css';
const Pedidos = () => {
    const [botao1, setBotao1] = useState("buttonDisable")
    const [botao2, setBotao2] = useState("buttonDisable")
    const [botao3, setBotao3] = useState("buttonDisable")
    const [botao4, setBotao4] = useState("buttonDisable")
    const [botao5, setBotao5] = useState("buttonDisable")
    const [botao6, setBotao6] = useState("buttonDisable")
    const [botao7, setBotao7] = useState("buttonDisable")

    const [nome, setNome] = useState("")
    const [rua, setRua] = useState("")
    const [numero, setNumeto] = useState("")
    const [bairro, setBairro] = useState("")
    const [pontoReferencia, setPontoReferencia] = useState("")

    const [quantidade, setQuantidade] = useState(0)
    const [valor, setValor] = useState(0.00)
    const [quantidade_max, setQuantidade_max] = useState(0)
    const [auxiliar, setAuxiliar] = useState(0)
    const [auxiliar_quantidade, setAuxiliar_quantidade] = useState(0)
    const [tipo_de_pagamento, setTipo_de_pagamento] = useState("")

    const [croquete_select, setCroquete_select] = useState(0);
    const [croquete, setCroquete] = useState("");


    const [bolinha_de_queijo_select, setBolinha_de_queijo_select] = useState(0);
    const [bolinha_de_queijo, setBolinha_de_queijo] = useState("");


    const [coxinha_de_carne_select, setCoxinha_de_carne_select] = useState(0);
    const [coxinha_de_carne, setCoxinha_de_carne] = useState("");


    const [coxinha_de_frango_select, setCoxinha_de_frango_select] = useState(0);
    const [coxinha_de_frango, setCoxinha_de_frango] = useState("");

    const [traviseiro_select, setTraviseirinho_select] = useState(0);
    const [traviseirinho, setTraviseirinho] = useState("");

    const [enrolado_select, setEnrolado_select] = useState(0);
    const [enrolado, setEnrolado] = useState("");

    const [churros_select, setChurros_select] = useState(0);
    const [churros, setChurros] = useState("");
    const [churros_quantidade, SetChurros_quantidade] = useState(0.0)


    function Croquete() {
        if(auxiliar < quantidade_max){
            setCroquete_select(croquete_select + 1)
            
            if(croquete_select > -1) {
                setCroquete("|---Croquete---|%0D%0A%0D%0A")
                setBotao1("buttonEnable")
                setAuxiliar(auxiliar+1)
                
            }
        }
        
        if(auxiliar === quantidade_max){
            alert("Você não pode selecionar mais esse sabor devido a quantidade de salgados escolhidos")
            if (croquete_select > 0){
                setCroquete_select(croquete_select -1)
                setCroquete("")
                setBotao1("buttonDisable")
                setAuxiliar(auxiliar-1)
    
            }
        }
    }

    function Bolinha_de_queijo() {
        if(auxiliar < quantidade_max){
            setBolinha_de_queijo_select(bolinha_de_queijo_select + 1)
            
            if(bolinha_de_queijo_select > -1) {
                setBolinha_de_queijo("|---Bolinha de Queijo---|%0D%0A%0D%0A")
                setBotao2("buttonEnable")
                setAuxiliar(auxiliar+1)
            }
            
        }
        if(auxiliar === quantidade_max){
            alert("Você não pode selecionar mais esse sabor devido a quantidade de salgados escolhidos")
            if (bolinha_de_queijo_select > 0){
                setBolinha_de_queijo_select(bolinha_de_queijo_select -1)
                setBolinha_de_queijo("")
                setBotao2("buttonDisable")
                setAuxiliar(auxiliar-1)
                
            }
        }
        
        
    }

    function Coxinha_de_carne() {
        if(auxiliar < quantidade_max){
            setCoxinha_de_carne_select(coxinha_de_carne_select + 1)
            
            if(coxinha_de_carne_select > -1) {
                setCoxinha_de_carne("|---Coxinha de Carne---|%0D%0A%0D%0A")
                setBotao3("buttonEnable")
                setAuxiliar(auxiliar+1)
            }
            
        }
        
        if(auxiliar === quantidade_max){
            alert("Você não pode selecionar mais esse sabor devido a quantidade de salgados escolhidos")
            if (coxinha_de_carne_select > 0){
                setCoxinha_de_carne_select(coxinha_de_carne_select -1)
                setCoxinha_de_carne("")
                setBotao3("buttonDisable")
                setAuxiliar(auxiliar -1)
            }
        }

        
    }
    function Coxinha_de_frango() {
        if(auxiliar < quantidade_max){
            setCoxinha_de_frango_select(coxinha_de_frango_select + 1)
            if(coxinha_de_frango_select > -1) {
                setCoxinha_de_frango("|---Coxinha de Frango---|%0D%0A%0D%0A")
                setBotao4("buttonEnable")
                setAuxiliar(auxiliar+1)
            }
            
        }
        
        if(auxiliar === quantidade_max){
            alert("Você não pode selecionar mais esse sabor devido a quantidade de salgados escolhidos")
                if (coxinha_de_frango_select > 0){
                    setCoxinha_de_frango_select(coxinha_de_frango_select -1)
                    setCoxinha_de_frango("")
                    setBotao4("buttonDisable")
                    setAuxiliar(auxiliar -1)
                }
        }
    }
    function Traviseirinho() {
        if(auxiliar < quantidade_max){
            setTraviseirinho_select(traviseiro_select + 1)
            if(traviseiro_select > -1) {
                setTraviseirinho("|---Travisseirinho de Presunto e Queijo---|%0D%0A%0D%0A")
                setBotao5("buttonEnable")
                setAuxiliar(auxiliar+1)
            }
            
        }
        if(auxiliar === quantidade_max){
            alert("Você não pode selecionar mais esse sabor devido a quantidade de salgados escolhidos")
                if (traviseiro_select > 0){
                    setTraviseirinho_select(traviseiro_select -1)
                    setTraviseirinho("")
                    setBotao5("buttonDisable")
                    setAuxiliar(auxiliar -1)
                }
        }
        
    }
    function Enrolado_de_salcicha() {
        if(auxiliar < quantidade_max){
            setEnrolado_select(enrolado_select + 1)
            if(enrolado_select > -1) {
                setEnrolado("|---Enroladinho de salsicha---|%0D%0A%0D%0A")
                setBotao6("buttonEnable")
                setAuxiliar(auxiliar+1)
            }
            
        }
        if(auxiliar === quantidade_max){
            alert("Você não pode selecionar mais esse sabor devido a quantidade de salgados escolhidos")
                if (enrolado_select > 0){
                    setEnrolado_select(enrolado_select -1)
                    setEnrolado("")
                    setBotao6("buttonDisable")
                    setAuxiliar(auxiliar -1)
                }
        }
    }

    function Churros() {

       
        if(auxiliar < quantidade_max){
            setChurros_select(churros_select + 1)
            if(churros_select > -1) {
                setChurros("|---Churros de Doce de Leite---|")
                setBotao7("buttonEnable")
                setAuxiliar(auxiliar+1)
            }
            
        }
        if(auxiliar === quantidade_max){
            alert("Você não pode selecionar mais esse sabor devido a quantidade de salgados escolhidos")
                if (churros_select > 0){
                    setChurros_select(churros_select -1)
                    setChurros("")
                    setBotao7("buttonDisable")
                    setAuxiliar(auxiliar -1)
                }
        }
        
    }
    function Quantidade_Aumentar25() {
        setQuantidade(quantidade+25)
        
    }

    function Quantidade_Diminuir25() {
        if(quantidade <= 0){
            setQuantidade(quantidade*0)
            
        }
        else{
            setQuantidade(quantidade-25)
        }
    }
    function Quantidade_Aumentar50() {
        setQuantidade(quantidade+50)
        
    }

    function Quantidade_Diminuir50() {
        if(quantidade <= 0){
            setQuantidade(quantidade*0)
            
        }
        else{
            setQuantidade(quantidade-50)

        }
    }

    function Quantidade_Aumentar100() {
        setQuantidade(quantidade+100)
        
    }

    function Quantidade_Diminuir100() {
        if(quantidade <= 0){
            setQuantidade(quantidade*0)
        }
        else{
            setQuantidade(quantidade-100)

        }
    }
    function Valor(){
        if(quantidade <= 0 ){
            setQuantidade(quantidade*0)
        }
        setValor(quantidade*0.80+2)
        if(quantidade>25){
            setValor(quantidade*0.60+2)
        }
        
    }
    function ValidarQuantidade(){
        if(quantidade===0){
            setQuantidade_max(0)
            
        }
        if(quantidade===25){
            setQuantidade_max(1)
            
        }
        if(quantidade===50){
            setQuantidade_max(3)
            
        }
        if(quantidade===75){
            setQuantidade_max(3)
            
        }
        if(quantidade===100){
            setQuantidade_max(4)
            
        }
        if(quantidade===125){
            setQuantidade_max(5)
            
        }
        if(quantidade === 150){
            setQuantidade_max(6)
            
        }
        if(quantidade>150){
            setQuantidade_max(7)
            
        }
        
    }
    function QuantidadeChurros (){
        setAuxiliar_quantidade(quantidade)
        if(auxiliar_quantidade !== churros_quantidade){
            setAuxiliar_quantidade(quantidade - churros_quantidade)
        }
        if(auxiliar_quantidade === churros_quantidade){
            setAuxiliar_quantidade(churros_quantidade)
        }
    }
    function MaisChurros(){
        if(auxiliar < quantidade_max){
            SetChurros_quantidade(churros_quantidade + 25)
        }
        
        if(churros_quantidade >= quantidade){
            SetChurros_quantidade(quantidade)
            alert("O Número de Churros não pode ser maior que a quantidade total do pedido")
        }
    }
    function MenosChurros(){
        SetChurros_quantidade(churros_quantidade - 25)
        setAuxiliar_quantidade(quantidade)

        if(churros_quantidade < 0){
            SetChurros_quantidade(churros_quantidade * 0)
        }
    }


    useEffect(() => {
        QuantidadeChurros();
        ValidarQuantidade();
        Valor();
    });

  return (
      <body>
          <div className="content">
                <div className="containerDados">
                    <div className="alertText">
                        <p>
                            Quantidade de Mini Salgados = {auxiliar_quantidade}
                        </p>
                        <p>
                            Quantidade Churros = {churros_quantidade}
                        </p>
                        <p>
                            Escolhendo essa quantidade total {quantidade} unidades, poderá ser escolhido {quantidade_max} de sabor(es) de Mini Salgado
                        </p>
                    </div>
                    <div className="contentDados">
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu Nome:"/>
                    </div>
                        <form method="post" className="contentDados">
                            <input name="Rua" type="text" value={rua} onChange={(e) => setRua(e.target.value)} placeholder="Rua:"/>
                            <input type="text" value={numero} onChange={(e) => setNumeto(e.target.value)} placeholder="Número e Complemento:"/>
                            <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} placeholder="Bairro:"/>
                            <input type="text" value={pontoReferencia} onChange={(e) => setPontoReferencia(e.target.value)} placeholder="Ponto de Referência:"/>
                        </form>
                </div>
                <h3>Quantidade de mini salgados: {quantidade} Unidades</h3>              
                    <div className="containerQuantidade">
                        <button onClick={Quantidade_Aumentar25} >
                            +25 unidades
                        </button>
                        <button onClick={Quantidade_Diminuir25}>
                            -25 unidades
                        </button>
 
                        <button onClick={Quantidade_Aumentar50}>
                            +50 unidades
                        </button>
                        <button onClick={Quantidade_Diminuir50}>
                            -50 unidades
                        </button>
                        <button onClick={Quantidade_Aumentar100}>
                            +100 unidades
                        </button>                        
                        <button onClick={Quantidade_Diminuir100}>
                            -100 unidades
                        </button>
                    </div>
                <h3>Sabores de mini salgados</h3>
                <div className="containerSabores">
                    
                    <button className={botao1} onClick={Croquete} >
                        Croquete
                    </button>
                    <button className={botao2} onClick={()  => {Bolinha_de_queijo()}}>
                        Bolinha de queijo
                    </button>
                    <button className={botao3} onClick={()  => {Coxinha_de_carne()}}>
                        Coxinha de carne
                    </button>
                    <button className={botao4} onClick={()  => {Coxinha_de_frango()}}>
                        Coxinha de frango
                    </button>
                    <button className={botao5} onClick={()  => {Traviseirinho()}}>
                        Traviseirinho de Presunto e Queijo
                    </button>
                    <button className={botao6} onClick={()  => {Enrolado_de_salcicha()}}>
                        Enroladinho de salcicha
                    </button>
                    
                </div>
                <p className="churrosAlert">
                    Para selecionar churro precissa colocar a quantidade desejada clicando nos botões de ( + ) e de ( - ).<br/>
                    Após clicar sobre o botão de churros para seleciona-lo 
                </p>
                <div className="containerChurros">
                    <button className="btnChurros"onClick={() => {MaisChurros()}}>+</button>
                    <button className={botao7} onClick={()  => {Churros()}}>
                        {churros_quantidade} x Churros de Doce de Leite
                    </button>
                    <button className="btnChurros" onClick={() => {MenosChurros()}}>-</button>
                </div>
                <h3>Finalizar Pedido</h3>
                <h3>{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                <div className="containerSabores">
                    
                    <a href={`https://api.whatsapp.com/send?phone=5566999123619&text=Nome%3A%20${nome}%0D%0A%0D%0AEndere%C3%A7o%3A%0D%0ABairro%3A%20%20${bairro};%20%20%20%0D%0ARua%3A%20%20${rua};%20%20%20%0D%0An%C3%BAmero e Complemento%3A%20%20${numero};%20%20%20%0D%0APonto%20de%20Refer%C3%AAncia%3A%20%20${pontoReferencia};%0D%0A%0D%0AQuantidade%3A%0D%0A${auxiliar_quantidade}%20unidades%20de%20mini%20salgados%0D%0A${churros_quantidade}%20unidades%20de%20Churros%0D%0A%0D%0ASabor%28es%29%3A%0D%0A${croquete+''+bolinha_de_queijo+''+coxinha_de_carne+''+coxinha_de_frango+''+traviseirinho+''+enrolado}%0D%0A${churros+churros_quantidade+" unidades"}%0D%0A%0D%0AValor%28R%24%29%3A%20${valor+",00"}`} target="_blanck" rel="external">Efetuar seu Pedido !</a>
                </div>
          </div>
      </body>
  );
}

export default Pedidos;