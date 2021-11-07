import React, { Component } from "react";
import  FormularioCadastro  from "./components/FormularioCadastro";
import ListaDeNotas from './components/ListaDeNotas';
import "./assets/app.css";
import "./assets/index.css"
import CardNota from "./components/CardNota";
class App extends Component {

    render() {
      return (
        <section className="container">
          <FormularioCadastro/>
          <ListaDeNotas/>
  
        </section>
    );
}
    }


export default App;
