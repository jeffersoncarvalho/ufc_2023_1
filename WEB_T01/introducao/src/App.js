import './App.css';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
//import MyProps from './components/02MyProps';
//import MeusDados from './components/atividade00/01MeusDados';
//import MeusDados from './components/atividade00/02MeusDados';
//import Temperatura from './components/atividade00/03Temperatura';
//import FunctionA from './components/03Hierarquia/FunctionA';
//import {Header,Body,Footer} from './components/04MultiploComponente';
//import {Header as H,Body as B,Footer as F} from './components/04MultiploComponente';
//import * as Site from './components/04MultiploComponente';
import { Supermercado, Legume, Fruta, Bebida } from './components/05Children/MyChildrenV0';

/*function App() {
  return (
    <MeusDados 
      nome = "Jefferson de Carvalho"
      curso = "Design Digital"
      universidade = "UECE"
    />
  );
}*/

/*function App() {
  return (
    <div>
      <Site.Header />
      <Site.Body />
      <Site.Footer />
    </div>
  );
}*/

function App() {
  return (
    <div>
      <Supermercado nome="DuPovaum">
        <Legume nome = "Chuchu" />
        <Fruta nome = "Maça" />
        <Bebida nome = "Água com gás" />
      </Supermercado>
    </div>
  );
}

export default App;
