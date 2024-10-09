# Project Todo

Este é um projeto de API de gerenciamento de tarefas utilizando Express.js e Prisma ORM com MongoDB.

## Estrutura do Projeto

- **/src**: Contém o código-fonte do projeto.
  - **/controllers**: Contém os controladores que lidam com as requisições HTTP.
  - **/models**: Contém os modelos do Prisma que definem a estrutura do banco de dados.
  - **/routes**: Contém as definições das rotas da API.
  - **/services**: Contém a lógica de negócios e serviços auxiliares.
  - **/middlewares**: Contém os middlewares utilizados na aplicação.
  - **/utils**: Contém funções utilitárias e helpers.
- **/prisma**: Contém os arquivos de configuração do Prisma, incluindo o esquema do banco de dados.
- **/tests**: Contém os testes unitários e de integração.
- **package.json**: Arquivo de configuração do npm, contendo as dependências e scripts do projeto.
- **.env**: Arquivo de configuração de variáveis de ambiente.

## Modo de Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/EduardoNegalho/TODO-LIST-API.git

2. Navegue até o diretório do projeto:
   ```sh
   cd nome-do-projeto
4. Instale as dependências:
5. Configure as variáveis de ambiente do MongoDB no arquivo .env.
6. Execute as migrações do Prisma para configurar o banco de dados:
   ````sh
   npx prisma migrate dev
7. Inicie o servidor:
   ````sh
   npm start