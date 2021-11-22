import React, { Component } from "react";
import  FormularioCadastro  from "./components/FormularioCadastro";
import ListaDeNotas from './components/ListaDeNotas';
import "./assets/app.css";
import "./assets/index.css"
class App extends Component {

    constructor(){
      super();
      //tem que chamar o super que é o construtor da classe pai(component).
      this.state = {
        notas:[]
      }
    }

    criarNota(titulo, texto){
      const novaNota = {titulo, texto};
      const novoArrayNotas = [...this.state.notas,novaNota]
      const novoEstado ={
        notas:novoArrayNotas
      }
      this.setState(novoEstado)
    }

    deletarNota(index){
      let arrayNotas = this.state.notas;
      arrayNotas.splice(index,1);
      this.setState({nota:arrayNotas})
    };


    render() {
      return (
        <section className="conteudo">
          <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
          <ListaDeNotas
          deletarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}/>
  
        </section>
    );
}
    }


export default App;
