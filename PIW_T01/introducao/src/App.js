import './App.css';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
import MyProps from './components/02MyProps';

function App() {
  return (
    <div className="primeira-aula">
     <MyProps nome="Jefferson" curso="Sistemas de Informação"/>
     <MyProps nome="Wladimir" curso="Design Digital"/>
    </div>
  );
}

export default App;
