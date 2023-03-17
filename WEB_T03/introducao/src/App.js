import './App.css';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
import MyProps from './components/02MyProps';

function App() {
  return (
    <div className="App">
      <MyProps 
        nome="Jefferson" 
        curso="Sistemas de Informação"
      />
    </div>
  );
}

export default App;
