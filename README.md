<h1 align="center">
    <img alt="CadêOBar?" title="#Cadê o Bar?" src="https://user-images.githubusercontent.com/56003521/92938972-93dd2d80-f423-11ea-8a9a-16e316599e7b.png" width="200px" />
</h1>


<p align="center">
  <a href="#-o-projeto">PROJETO</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-usando">INSTALAÇÃO</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-API's">API's</a>
</p>


## O PROJETO

O objetivo deste desafio é criar um projeto web para cadastrar unidades de uma usina de cana-de-açúcar em um banco de dados.

🔗 [DOCUMENTAÇÃO DO DESAFIO](https://bitbucket.org/modclima/challenge/src/master/)

### TECNOLOGIAS USADAS

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## USANDO
### Requisitos para rodar o projeto
- NodeJS > 12.x.x

### Instalação
- Baixe este repositório;

- Abra-o no terminal na pasta do projeto

- Rode o comando abaixo e aguarde a instalação
```
npm install
```
- Para subir o servidor local
```
npm run dev
```

O servidor irá rodar na porta `3333` 

## API's

#### MoinhoAPI / MillAPI
- Criar um Moinho
  - Método `POST`
  - URL `/mill`
  - Body
  ```
  {
    "name": "NomeDoMoinho"
  }
  ```
  
- Ler dados de um Moinho pelo Nome
    - Método `GET`
    - URL `/mill/:name`
   
  
#### ColheitaAPI / HarvestAPI
- Criar uma Colheita
  - Método `POST`
  - URL `/harvest`
  - Body
  ```
  {
    "id_mill": 2,
    "harvests": 
    [
      {
        "code": "050201",
        "start_date": "09/09/2020",
        "end_date": "09/12/2021"
      },
      {
        "code": "9999",
        "start_date": "27/10/2020",
        "end_date": "27/12/2021"
      }
    ]
  }
  ```
  **Atenção: Caso não queira associar uma Colheita a um Moinho, o "id_mill" será null**
  
- Ler dados de uma Colheita pelo Código
    - Método `GET`
    - URL `/harvest/:code`
    
- Ler dados de uma Colheita pela Data de Início e Término
    - Método `GET`
    - URL `/harvest/:start_date/:end_date`
    
    
#### FazendaAPI / FarmAPI
- Criar uma Fazenda
  - Método `POST`
  - URL `/farm`
  - Body
  ```
  {
    "id_harvest": 2,
    "harvests": 
    [
      {
        "code": "050201",
        "start_date": "09/09/2020",
        "end_date": "09/12/2021"
      },
      {
        "code": "9999",
        "start_date": "27/10/2020",
        "end_date": "27/12/2021"
      }
    ]
  }
  ```
  **Atenção: Caso não queira associar uma Colheita uma Fazenda, o "id_harvest" será null**
    
- Ler dados de uma Fazenda pelo Nome e Código
    - Método `GET`
    - URL `/farm/:name/:code`
    
    
#### CampoAPI / FieldAPI
- Criar um Campo
  - Método `POST`
  - URL `/field`
  - Body
  ```
  {
    "id_farm": 1,
    "fields": 
    [
      {
        "code": "7777",
        "latitude": "-23.5534688",
        "longitude": "-46.6925377"
      }
    ]
  }
  ```
  **Atenção: Caso não queira associar uma Fazenda a um Campo, o "id_farm" será null**
  
- Ler dados de um Campo pelo Código
    - Método `GET`
    - URL `/field/:code`


