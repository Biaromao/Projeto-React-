import './App.css';

var anos = parseInt(prompt("Digite quantos anos você tem: "));
var meses = parseInt(prompt("Digite quantos meses você tem: "));
var dias = parseInt(prompt("Digite quantos dias você tem: "));

function D(){
    return (dias + (meses * 30) + (anos * 365));
}

function App12(){

    return(
        <div className = "App1">
            <p>A sua idade, expressa somente em dias, é: {D()} </p>
        </div>
    );

}

export default App12;   