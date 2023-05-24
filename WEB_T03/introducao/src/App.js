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
//import { Supermercado, Legume, Bebida } from './components/05Children';
//import Pai from './atividades/atividade01/questao01/01Pai';
//import * as PC from './atividades/atividade01/02MeuPC'
//import * as Batalha from './atividades/atividade01/03Batalha'
//import FuncaoA from './components/06Contexto/FuncaoA';
//import FuncaoA from './atividades/atividade02/questao01/FuncaoA';
//import Avo from './atividades/atividade02/questao02/Avo';
//import {SaveData,LoadData} from './components/07Storage/MyStorage';
//import Pai from './components/08PaiFilho/Pai';
//import Contador from './components/09Estados/Contador';
//import VotaCidades from './atividades/atividade03/questao01/VotaCidades';
//import VotaCidades from './atividades/atividade03/questao01/VotaCidadesV1';
//import PokemonAxios from './components/10Axios/PokemonAxios';
//import TelaPrincipal from './components/11Redux/v2/TelaPrincipal';
//import MeuIndex from './components/11Redux/v2/MeuIndex';
//import MinhaPromise from './components/12Promises/MinhaPromise';
//import MeuAsync from './components/12Promises/MeuAsync';
//import Signin from './components/13MUI/01Signin/Signin';
//import MyMenu from './components/13MUI/02Crud/MyMenuV1';
import MainPage from './components/13MUI/02Crud/MainPage';

function App() {
  return (
    <div>
      <MainPage />
    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      <Pai />
      <hr />
      <PC.PlacaDeVideo nome="RTX 3060" preco={5600.99} />
      <PC.PlacaMae nome="GigaByte" preco={1000.99} />
      <PC.Memoria nome="DDR 4" preco={500.99} />
      <hr />
      <Batalha.World>
        <Batalha.Arena />
        <Batalha.Arena />
      </Batalha.World>
      <hr />
      <Batalha.World>
        <Batalha.Arena2 name="Castelão">
          <Batalha.Hero name="Super Wlads" />
          <Batalha.Enemy name="Dr. Jeff MasterMind" />
        </Batalha.Arena2>
      </Batalha.World>
    </div>
  );
}
*/

/*function App() {
  return (
    <div className="App">
      <Supermercado nome="DuPovaum">
        <Legume nome="Batata" />
        <Bebida nome="Café" />
      </Supermercado>
    </div>
  );
}*/

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
