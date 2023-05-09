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
//import { Supermercado, Legume, Fruta, Bebida } from './components/05Children/MyChildrenV0';
//import Pai from './components/atividade01/questao01/01Pai';
//import * as PC from './components/atividade01/02MeuPC'
//import * as Batalha from './components/atividade01/03Batalha'
//import FuncaoA from './components/06Contexto/FuncaoA';
//import FuncaoA from './components/atividade02/questao01/FuncaoA';
//import ComponenteAvo from './components/atividade02/questao03/ComponenteAvo';
//import VotaCidades from './components/atividade03/questao01/VotaCidadesV1';
//import PokemonAxios from './components/10Axios/PokemonAxios';
//import TelaPrincipal from './components/11Redux/v1/TelaPrincipal';
//import MeuIndex from './components/11Redux/v2/MeuIndex';
//import MinhaPromise from './components/12Promises/MinhaPromise';
//import MeuAwait from './components/12Promises/MeuAsync';
//import MyRefs from './components/13Refs/MyRefs';
//import Pai from './components/atividade03/questao02/Pai';
import Questao01 from './components/atividade04/questao01/Questao01';

function App() {
  return (
    <Questao01 />
  );
}

/*function App() {
  return (
    <div>
      <Pai />
      <hr />
      <PC.PlacaDeVideo nome="RTX 3090" preco={10300.99} />
      <PC.PlacaMae nome="Gigabyte" preco={1000.99} />
      <PC.Memoria nome="DDR 4" preco={600.99} />
      <hr />
      <Batalha.World>
        <Batalha.Arena name="Castelão" />
        <Batalha.Arena name="Abilhão" />       
      </Batalha.World>
      <hr />
      <Batalha.World>
        <Batalha.Arena2 name="Castelão" >
            <Batalha.Hero name="Super Aragas" />
            <Batalha.Enemy name="Jeff Mastermind" />
        </Batalha.Arena2>     
      </Batalha.World>
    </div>
  );
}*/

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

/*function App() {
  return (
    <div>
      <Supermercado nome="DuPovaum">
        <Legume nome = "Chuchu" />
        <Fruta nome = "Maça" />
        <Bebida nome = "Água com gás" />
      </Supermercado>
    </div>
  );
}*/

export default App;
