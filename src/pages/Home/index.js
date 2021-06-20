import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Table } from './styled';

export default function Home() {
  return (
    <Container>
      <h1>Teste Dev JR</h1>
      <p>
        Este é um projeto que tem o intuito de participar de um teste de
        emprego, sendo a vaga para Desenvolvedor JR. Ele É dividido em 2 partes,
        com esse sendo a parte de front-end e contendo ainda uma parte back-end.
      </p>
      <br />
      <h2>Repositórios</h2>
      <a href="https://github.com/GustavoGomesDias/test-001">Back-end</a>|
      <a href="https://github.com/GustavoGomesDias/test-001-frontend">
        Front-end
      </a>
      <Table>
        <tr />
        <td align="center">
          <a href="https://github.com/GustavoGomesDias">
            <img
              src="https://github.com/GustavoGomesDias.png"
              width="100px;"
              alt="Profile"
            />
            <br />
            <sub>
              <b>Autor: Gustavo</b>
            </sub>
          </a>
          <br />
          <a href="https://github.com/GustavoGomesDias" title="Code">
            😎
          </a>
        </td>
        <tr />
      </Table>
    </Container>
  );
}
