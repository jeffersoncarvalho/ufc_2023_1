//V0
/*function HelloWorld() {
  let nome = " de Carvalho"
  return (
    <div>
      <h2>Jefferson {nome}</h2>
      <h3>Design Digital</h3>
      <div>
          <h4>Campus de Quixadá</h4>
      </div>
    </div>
  );
}*/

import React from "react";

//V1
/*const HelloWorld = () => {
  return (
    <div>
      <h2>Jefferson</h2>
      <h3>Design Digital</h3>
      <div>
          <h4>Campus de Quixadá</h4>
      </div>
    </div>
  );
}*/

//V2
/*const HelloWorld = () => 
    <div>
      <h2>Jefferson </h2>
      <h3>Design Digital</h3>
      <div>
          <h4>Campus de Quixadá</h4>
      </div>
    </div>*/

//V3
class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h2>Jefferson com Classe </h2>
        <h3>Design Digital</h3>
        <div>
          <h4>Campus de Quixadá</h4>
        </div>
      </div>
    );
  }
}

export default HelloWorld;
