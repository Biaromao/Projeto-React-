import './App.css';

var fahrenheit = parseInt(prompt("Digite o valor em graus Faahrenheit: "));
              
function resposta(){
    return 5 * (fahrenheit - 32) / 9;
}

function App20(){

    return(
        <div className = "App1">
            <p>{fahrenheit}º Fahrenheit corresponde a: {resposta()}º Celsius.</p>
        </div>
    );

}

export default App20;   