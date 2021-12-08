import './App.css';

var celsius = parseInt(prompt("Digite o valor em graus Celsius: "));
               
function resposta(){
    return (9 * celsius + 160) / 5;
}

function App19(){

    return(
        <div className = "App1">
            <p>{celsius}º Celsius corresponde a: {resposta()}º Fahrenheint.</p>
        </div>
    );

}

export default App19;   