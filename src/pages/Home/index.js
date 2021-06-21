import React from 'react';

import { Table, Div, Header } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Home() {
  return (
    <Container className="home">
      <Header>
        <h1>Teste Dev JR</h1>
      </Header>
      <Div>
        <div className="column-1 description">
          <h2>Descrição</h2>
          <p>
            Este é um projeto que tem o intuito de participar de um teste de
            emprego, sendo a vaga para Desenvolvedor JR. Ele é dividido em 2
            partes, com esse sendo a parte de front-end e contendo ainda uma
            parte back-end.
          </p>
        </div>
        <div className="column-1 repository">
          <h2>Repositórios</h2>
          <div className="repositories">
            <div className="column-1">
              <h3>
                <a href="https://github.com/GustavoGomesDias/test-001">
                  Back-end
                </a>
              </h3>

              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>Sequelize</li>
                <li>MySQL</li>
                <li>Dotenv</li>
                <li>Cors e helmet</li>
                <li>ESLint - AirBnB</li>
              </ul>
            </div>
            <div className="column-1">
              <h3>
                <a href="https://github.com/GustavoGomesDias/test-001-frontend">
                  Front-end
                </a>
              </h3>

              <ul>
                <li>React</li>
                <li>React Router Dom</li>
                <li>React Toastify</li>
                <li>Styled Components</li>
                <li>Axios</li>
                <li>ESLint - AirBnB</li>
                <li>Prettier</li>
              </ul>
            </div>
          </div>
        </div>
      </Div>
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
