import './App.css';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
import MyProps from './components/02MyProps';

function App() {
  return (
    <MyProps 
      nome="Jefferson de Carvalho Silva" 
      idade={18} 
      curso="Sistemas de Informação"
    />
  );
}

export default App;
