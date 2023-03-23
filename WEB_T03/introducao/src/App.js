import './App.css';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
//import MyProps from './components/02MyProps';
//import MeusDados from './atividades/atividade00/01MeusDados';
//import MeusDados from './atividades/atividade00/02MeusDados';
//import Temperatura from './atividades/atividade00/03Temperatura';
//import FunctionA from './components/03Hierarquia/FunctionA';
//import { Header, Body, Footer } from './components/04Multiplo';
//import { Header as H, Body as B, Footer as F} from './components/04Multiplo';
//import * as Site from './components/04Multiplo';
import { Supermercado, Legume, Bebida } from './components/05Children';

function App() {
  return (
    <div className="App">
      <Supermercado nome="DuPovaum">
        <Legume nome="Batata" />
        <Bebida nome="Café" />
      </Supermercado>
    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      <Site.Header />
      <Site.Body />
      <Site.Footer />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <FunctionA x={10} y={15} />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <MeusDados
        nome = "Wladimir Tavares"
        curso = "Matemática"
        universidade = "UECE" 
      />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <MyProps 
        nome="Jefferson" 
        curso="Sistemas de Informação"
      />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <MyProps 
        nome="Jefferson" 
        curso="Sistemas de Informação"
      />
    </div>
  );
}*/

export default App;
