import './App.css';

var salarioFixo = parseInt(prompt("Digite o salário fixo do vendedor : "));
        var vendas = parseInt(prompt("Digite o valor das vendas desse mês feitas pelo vendedor : "));

function resposta(){
    return salarioFixo + (vendas * 0.05);
}

function App16(){

    return(
        <div className = "App1">
            <p>O salário final do vendedor será de R$ {resposta().toFixed(2)} </p>
        </div>
    );

}

export default App16;   