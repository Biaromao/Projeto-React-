import './App.css';

var precoInicial = parseInt(prompt("Digite o custo de fábrica do carro: "));

function resposta(){
    return precoInicial + (precoInicial * 0.28) + (precoInicial * 0.45);
}

function App15(){

    return(
        <div className = "App1">
            <p>O valor final que o consumidor pagará será de: R$ {resposta().toFixed(2)} </p>
        </div>
    );

}

export default App15;   