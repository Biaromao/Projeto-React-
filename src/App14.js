import './App.css';

var salario = parseInt(prompt("Digite o valor do salário atual do funcionário em reais: "));
var perc = parseInt(prompt("Digite o percentual do reajuste do salário do funcionário: "));

function resposta(){
    return salario + (salario * perc / 100);
}

function App14(){

    return(
        <div className = "App1">
            <p>um salário de R$: {salario} que recebe um reajuste de {perc}% se torna: {resposta().toFixed(2)} </p>
        </div>
    );

}

export default App14;   