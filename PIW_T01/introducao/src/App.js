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
//import { Supermercado, Legume, Fruta, Bebida } from './components/06Children';
//import Pai from './atividades/atividade01/questao01/01Pai';
//import * as PC from './atividades/atividade01/02MeuPC'
//import { Arena, World, Hero, Enemy } from './atividades/atividade01/03Batalha';
//import FuncaoA from './components/07Contexto/FuncaoA';
//import FuncaoA from './atividades/atividade02/questao01/FuncaoA';
//import Avo from './atividades/atividade02/questao02/Avo';
//import SaveData from './components/08Storage/FunctionLocalStorage';
//import Pai from './components/09PaiFilho/Pai';
//import FunctionEstados from './components/10Estados/FunctionEstados';
//import VotaCidades from './atividades/atividade03/questao01/VotaCidades';
//import VotaCidades from './atividades/atividade03/questao01/VotaCidades01';
import PokemonAxios from './components/10Axios/PokemonAxios';

function App() {
  return (
    <div >
      <PokemonAxios />    
    </div>
  );
}

/*function App() {
  return (
    <div className="primeira-aula">
      <World>
        <Arena name="Abilhão">
          <Hero name="Vilnei" />
          <Enemy name="Wlads" />
        </Arena>
      </World>
    </div>
  );
}*/


/*function App() {
  return (
    <div className="primeira-aula">
      <Pai />
      <hr />
      <PC.PlacaMae nome="Gigabyte" preco={5555.55} />
      <PC.PlacaDeVideo nome="2060" preco={777.77} />
      <PC.Memoria nome="DDR 4" preco={88.99} />
      <hr />
      <World>
        <Arena />
        <Arena />
      </World>
    </div>
  );
}*/

/*function App() {
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
}*/

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
