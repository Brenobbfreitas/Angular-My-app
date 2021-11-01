import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categorias, index) => {
          return (
            <li key={index}>
              <div>{categorias}</div>
               <CardNota />
          </li>
          );
        })} 
        {/* tudo dentro das chaves {} é javaScript */}
      </ul>
    );
  }
}

export default ListaDeNotas;
