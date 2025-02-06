# Verificador de CEP - API

Este é um projeto simples de uma API para consultar endereços a partir de um **CEP** utilizando a API pública **ViaCEP**. A aplicação foi desenvolvida em **Node.js** com **Express** e estruturada para ser facilmente compreendida e escalável.

![Imagem do Projeto](https://via.placeholder.com/600x400) <!-- Substitua pelo link da sua imagem -->

## Funcionalidades

- **Consulta de Endereço pelo CEP**: O usuário pode consultar o endereço completo de um CEP informado.
- **Uso da API ViaCEP**: A aplicação faz uma requisição à API pública ViaCEP para obter informações como logradouro, bairro, cidade e estado.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para construir a API REST.
- **Axios**: Biblioteca para fazer requisições HTTP para a API ViaCEP.
- **Classe Repository**: Organização do código para separar as responsabilidades de acesso a dados e controle de fluxo.

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/verificador-cep-api.git
 2. Instale as Dependências:
    npm install
 3. Inicie o Servidor:
   npm start
 4. Acesse a API via navegador ou via ferramentas como Postman:
   http://localhost:3000/cep/{seu-cep}
