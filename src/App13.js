import './App.css';

var validos = parseInt(prompt("Digite a quatidade de votos válidos da eleição: "));
var brancos = parseInt(prompt("Digite a quatidade de votos brancos da eleição: "));
var nulos = parseInt(prompt("Digite a quatidade de votos nulos da eleição: "));
var porcemtotal = (validos + brancos + nulos) / 100

function total() {
    return validos + brancos + nulos;
}
function valido() {
    return validos / porcemtotal;
}
function branco() {
    return brancos / porcemtotal;
}
function nul() {
    return nulos / porcemtotal;
}

function App13() {

    return ( <div className = "App1" >
        <p> A eleição teve um total de: {total()}
        votos.Desses, {valido().toFixed(2)} % votos foram válidos,
        {branco().toFixed(2)} % votos foram em branco, {nul().toFixed(2)} 
        % votos foram nulos. </p> </div>
    );

}

export default App13;