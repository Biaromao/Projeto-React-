import './App.css';

const nome= "Beatriz";
const sobrenome= "Romão Ribeiro";

function soma(a,b){
  return a+b
}

function subtracao(a,b){
  return a-b
}

function multiplicacao(a,b){
  return a*b
}

function divisao(a,b){
  return a/b
}

function App() {
  return (
    <div className="App">
      <p> O nome armazenado é: {nome + sobrenome}</p>
      <p>A soma : {10+15}</p>
      <p>A soma dos valores é : {soma(3,5)}  </p>
      <p>A subtracao dos valores é : {subtracao(3,5)}  </p>
      <p>A multiplicação dos valores é : {multiplicacao(3,5)}  </p>
      <p>A divisao dos valores é : {divisao(3,5)}  </p>
    </div>
  );
}
     
export default App;