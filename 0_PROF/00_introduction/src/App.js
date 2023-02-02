//import HelloFunction from "./components/introduction/00_hello/HelloFunction";
//import HelloClass from "./components/introduction/00_hello/HelloClass";
//import Atividade00Function from "./components/introduction/00_hello/Atividade00";
//import MyFunctionClass from "./components/introduction/01_functions/MyFunctionClass";
//import MyFunctionFunction from "./components/introduction/01_functions/MyFunctionFunction";
//import FunctionProps from "./components/introduction/02_props/FunctionProps";
//import ClassProps from "./components/introduction/02_props/ClassProps";
//import ClassAProps from "./components/introduction/03_props/ClassAProps";
//import FunctionAProps from "./components/introduction/03_props/FunctionAProps";
//import {Header as H,Body as B,Footer as F} from "./components/introduction/04_multiple/ClassMultiple";
//import {Header as H,Body as B,Footer as F} from "./components/introduction/04_multiple/FunctionMultiple";
/*function App() {
  return (
    <>
      <H/>
      <B />
      <F />
    </>
    
  );
}*/

//import { Supermercado, Legume, Fruta, Bebida } from "./components/introduction/05_children/FunctionChildren";
//import { Supermercado, Legume, Fruta, Bebida } from "./components/introduction/05_children/ClassChildren";
//import { Supermercado, Legume, Fruta, Bebida } from "./components/introduction/05_children/ClassReactChildren_V1";
//import { Supermercado, Legume, Fruta, Bebida } from "./components/introduction/05_children/ClassChildren_V2";
import { Supermercado, Legume, Fruta, Bebida } from "./components/introduction/05_children/FunctionChildren_V2"

function App() {
  return (
    <>
      <Supermercado nome = "Creysson" cidade = "Rio de Janeiro">
        <Fruta nome = "Tomate" />
        <Legume nome = "Batata-Doce" />
        <Bebida nome = "Suco de Laranja" />
      </Supermercado>
    </>

  );
}
export default App;
