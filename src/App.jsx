import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
    const [ numeroAleatorio, setNumeroAleatorio ] = useState(1);

    function gerarNumero() {
      const novoNumero = Math.floor(Math.random() * (100-1) + 1);
      setNumeroAleatorio(novoNumero);
    }



  return (
    <section>
    <div className="App">
            <div className="container">
                <h2>Número aleatório:</h2>
                <h1>{numeroAleatorio}</h1>
                <label>Clique no botão abaixo para gerar um número aleatório:</label>
                <button onClick={ gerarNumero }>Gerar número</button>
            </div>
        </div>  
      </section> 
  );
}

export default App;
