import React from "react";
import { Counter } from "./components/counter/Counter";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showCounter: false,
    };
  }

  render() {
    return (
      <>
        <h1>Projeto React - Ciclo de vida</h1>

        <button
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter });
          }}>
          {!this.state.showCounter ? "Mostrar Contador" : "Esconder Contador"}
        </button>

        {/*  
        Formas de mostrar o contador

        {this.state.showCounter ? <Counter /> : null} - Melhor escolha por boa prática, pois é mais correto retornar null que false, o que ocorre na segunda opção

        ou

        {this.state.showCounter && <Counter />}
        

        */}

        {this.state.showCounter ? <Counter /> : null}
      </>
    );
  }
}

export default App;
