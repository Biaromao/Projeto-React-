import './App.css';

var nota1 = parseInt(prompt("Digite o valor da primeira nota do aluno"));
var nota2 = parseInt(prompt("Digite o valor da segunda nota do aluno"));
var nota3 = parseInt(prompt("Digite o valor da terceira nota do aluno"));
                
function resposta(){
    return (nota1 * 2 + nota2 * 3 + nota3 * 5 ) / 10;
}

function App18(){

    return(
        <div className = "App1">
            <p>A nota final do aluno será: {resposta()}</p>
        </div>
    );

}

export default App18;   