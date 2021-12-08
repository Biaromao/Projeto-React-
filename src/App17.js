import './App.css';

var fahrenheit = parseInt(prompt("Digite o valor em graus Faahrenheit: "));
        
function resposta(){
    return 5 * (fahrenheit - 32) / 9;
}

function App17(){

    return(
        <div className = "App1">
            <p>{fahrenheit}º Fahrenheit equivalem a  {resposta().toFixed(2)}º Celsius </p>
        </div>
    );

}

export default App17;   