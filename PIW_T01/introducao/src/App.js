import './App.css';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
//import MyProps from './components/02MyProps';
//import MeusDados from './atividades/atividade00/01MeusDados';
//import MeusDados from './atividades/atividade00/02MeusDados';
//import Temperatura from './atividades/atividade00/03Temperatura';
//import FunctionA from './components/04Hierarquia/FunctionA';
//import { Header as H, Body as B, Footer as F} from './components/05Multiplo';
//import * as Site from './components/05Multiplo'
import { Supermercado, Legume, Fruta, Bebida } from './components/06Children';

function App() {
  return (
    <div className="primeira-aula">
      <Supermercado nome="DuPovaum">
        <Legume nome="Batata" />
        <Fruta nome="Maça" />
        <Bebida nome="Café" />
        <Bebida nome="Suco de Manga" />
      </Supermercado>
    </div>
  );
}

/*function App() {
  return (
    <div className="primeira-aula">
      <Site.Header />
      <Site.Body />
      <Site.Footer />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="primeira-aula">
      <FunctionA sobrenome="Carvalho"/>
    </div>
  );
}*/

/*function App() {
  return (
    <div className="primeira-aula">
      <MeusDados 
        nome = "Jefferson"
        curso = "Design Digital"
        universidade = "UFC Quixadá"
      />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="primeira-aula">
     <MyProps nome="Jefferson" curso="Sistemas de Informação"/>
     <MyProps nome="Wladimir" curso="Design Digital"/>
    </div>
  );
}*/

export default App;
