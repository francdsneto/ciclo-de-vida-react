import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    console.log("Construindo a classe counter");
    this.state = {
      contador: 0,
    };
  }

  /**
   * Métodos do ciclo quando será montado
   */

  UNSAFE_componentWillMount() {
    console.log("O componente será montado");
  }

  componentDidMount() {
    console.log("O componente foi montado. 👌");
  }

  /**
   * Métodos do ciclo quando será atualizado
   */

  UNSAFE_componentWillUpdate() {
    console.log("O componente será atualizado");
  }

  componentDidUpdate() {
    console.log("O componente já atualizou");
  }

  /**
   * Método que controla se o componente vai ou não atualizar as alterações na tela
   * @returns
   */
  shouldComponentUpdate() {
    return this.state.contador % 2 ? true : false;
  }

  /**
   * Método do ciclo quando será desmontado
   */
  componentWillUnmount() {
    console.log("O componente será desmontado");
  }

  render() {
    console.log("Renderizando o componente counter");
    return (
      <div>
        <h1>{this.state.contador}</h1>
        <button
          onClick={() => {
            this.setState({ contador: this.state.contador - 1 });
          }}>
          Dominuir
        </button>
        <button
          onClick={() => {
            this.setState({ contador: this.state.contador + 1 });
          }}>
          Aumentar
        </button>
      </div>
    );
  }
}
