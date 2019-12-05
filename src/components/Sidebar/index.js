import React, { Component } from "react";

export default class Sidebar extends Component {
  state = {
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: 1, title: "Primeira aula" },
          { id: 2, title: "Segunda aula" }
        ]
      },
      {
        id: 2,
        title: "Iniciando com Redux",
        lessons: [
          { id: 1, title: "Teceira aula" },
          { id: 1, title: "Quarta aula" }
        ]
      }
    ]
  };

  render() {
    return <div />;
  }
}
