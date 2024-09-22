<h1 align="center">API</h1>

### API REST, desenvolvida com Express para salvar os estudantes, seus endereços e seus cursos no banco de dados.

<p align="center">
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#Features">Features</a> • 
 <a href="#Pré-requisitos">Pré-requisitos</a> • 
 <a href="#Executando a API">Executando a API</a> • 
 <a href="#Rotas">Rotas</a> • 
</p>

<h4 align="center"> 
	🚧  Em construção...  🚧
</h4>

### Features
- [x] Cadastro de Estudante
- [x] Criação de Cursos
- [x] Vinculação de Curso e Estudante
- [x] ENDPOINTS REST
- [ ] Testes
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), 
[Node.js](https://nodejs.org/en/), 
[Postgres](https://www.postgresql.org/).

### Executando a API

```bash
# Clone este repositório
$ git clone https://github.com/deniscrocha/DesafioTrind.git

# Acesse a pasta do projeto no terminal/cmd
$ cd DesafioTrind

# Vá para a pasta server
$ cd api

# Instale as dependências
$ npm install

# Antes de executar a API você deverá mudar o conteúdo do .env.example para se conectar com o seu servidor
$ vim .env.example

# e agora mudar o nome do arquivo
$ mv ./.env.example ./.env

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

```
### Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Knex](https://knexjs.org/)
