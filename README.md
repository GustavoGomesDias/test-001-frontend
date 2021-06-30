# Job Test (frontend)

Esse é o repositório frontend do teste para Dev Jr proposto pela [Devnology](https://devnology.com.br/).

➡ [Descrição do teste](https://github.com/GustavoGomesDias/test-001/blob/main/test-description.md)

➡ [Documentação da API online](https://gustavogomesdias.github.io/test-001/)

➡ [Repositório backend](https://github.com/GustavoGomesDias/test-001)

➡ [Link da API](https://apivehicles.herokuapp.com/acquisition) (status: on ✔)

➡ [Link do site](https://test-001-frontend.vercel.app/) (status: on ✔) - Caso demore para servidor responder, considere esperar um tempo para a chegada das informações.

## 📕 Sumário
1. [Tecnologias usadadas](https://github.com/GustavoGomesDias/test-001#1--tecnologias-usadas)
2. [Para rodar o projeto LOCALMENTE](https://github.com/GustavoGomesDias/test-001#2--para-rodar-o-projeto-localmente)
3. [Para fazer deploy no Heroku](https://github.com/GustavoGomesDias/test-001#3--para-fazer-deploy-no-heroku)
4. [Configurar variáveis de ambiente](https://github.com/GustavoGomesDias/test-001#4-vari%C3%A1veis-de-ambiente-necess%C3%A1rio-no-heroku-tamb%C3%A9m)

## 1. ⚙ Features
  #### Proposto pelo teste
  - [x] Cadastrar a compra de um veículo, modelo, marca, ano de fabricação, placa, cor, chassi, data da compra e valor da compra.
  - [x] Registrar a venda de um veículo, com data da venda, valor da venda e comissão do vendedor (10% sobre o lucro da venda).
  - [x] Listar todos os veículos
  - [x] Listar veículos disponíveis
  - [x] Listar histórico de veículos vendidos
  - [x] Listar o valor todal de compras
  - [x] Listar o valor todal de vendas
  - [x] Lucro/pejuízo
  - [x] Valor pago em comissão

  #### ToDO
  - [ ] Editar histórico de vendas
    - Não sei se seria algo legal de se ter, mas basta adicionar a opção de editar no frontend, pois no backend já existe
  - [ ] Bug ao renderizar o form de venda
    - Alternativa: reaload da página ao clicar em voltar (alternativa ruim)
    - Alternativa: Configurar o redux apenas para isso (a que eu iria nesse caso)
  - [x] Verificar placa, para ela ser única (backend)
  - [x] Bug em listar veículos disponíveis
  - [x] Bug no mobile (setando a propriedade do controle responsivo como true)
  - [x] Vender veículo
  - [x] Editar veículo
  - [x] Excluir veículo
  - [x] Excluir venda do histórico
  - [x] Tentar transformar SaleForm em um componente que aparece suspenso ao clicar em 'Vender
  - [x] Mobile

## 2. 💻 Tecnologias usadas
* React
* React router dom
* React Toastify
* Styçed component
* Axios
* Prop types
* Lodash
* ESLint AirBnB
* Prettier

# 3. 🎉 Para rodar LOCALMENTE
1. Clone o repositório:
    ```
    git clone https://github.com/GustavoGomesDias/test-001-frontend.git
    ```
2. Instale todas es tec's usadas junto do Node JS:

    ```
    npm install
    ```
3. Rode o aplicativo e então será aberta uma nova aba no seu navegador padrão:

    ```
    npm start
    ```
 4. Para que ele funcione totalmente, seria necessário que ele tivesse uma conexão com a API que foi desenvolvida junto desse app, mas como esse é apenas um teste, eu provavelmente vou limitar quem pode fazer requisições a API caso ela estaja on, então siga a sessão [Para rodar o projeto LOCALMENTE](https://github.com/GustavoGomesDias/test-001#2--para-rodar-o-projeto-localmente) do repositório backend para ter a API servindo está parte aqui.
 5. Configurando a API para servir a parte de frontend:
    - Vá até o arquivo [app.js](https://github.com/GustavoGomesDias/test-001/blob/main/src/app.js)
    - Configure a whitelist para que a parte de frontend consiga fazer requisições:
      ```js
      const whiteList = [
        'http://localhost:3000', // <=== Esse link deverá ser adicionado
        'https://test-001-frontend.vercel.app',
      ];
      ```
## 4. 🚀 Para fazer deploy na Vercel:
1. Crie uma conta na [Vercel](https://vercel.com/signup)
2. Clique em "New Project"
  <img src="https://drive.google.com/uc?export=view&id=1fFVa1HwsneS6-uR4fJBK1AZUNAsRML1g" width="600px;" alt="Profile"/>
3. Importe um repositório
  <img src="https://drive.google.com/uc?export=view&id=1TcH6qV6xB_J9W2DggJeHRt_YeHy3qJsS" width="600px;" height="500px;" alt="Profile"/>

## 5. 🎨 Como ficou cada Tela
 ### Compras
  <img src="https://drive.google.com/uc?export=view&id=1md085dBCUKqC48ksm9RqIyUA66frLFaz" width="600px;" alt="Acquisitions"/>
  
 ### Vendas
  <img src="https://drive.google.com/uc?export=view&id=1pK5INmJG_dtuRcCPeF4hNN53mOFeruid" width="600px;" alt="Sales"/>

 ### Receitas
  <img src="https://drive.google.com/uc?export=view&id=1jFwIvqMxCEj9CW9x44y0_X2OCQcM5wVT" width="600px;" alt="Income"/>
  
 ### Responsivo
  <img src="https://drive.google.com/uc?export=view&id=1oLSrte0z3Y-7IX16GAFOA15qhQfo_Say" width="600px;" alt="Response"/>

## Autor
<table>
  <tr>
    <td align="center"><a href="https://github.com/GustavoGomesDias"><img src="https://github.com/GustavoGomesDias.png" width="100px;" alt="Profile"/><br /><sub><b>Gustavo</b></sub></a><br /><a href="https://github.com/GustavoGomesDias" title="Code">😎</a></td>
  <tr>
</table>
