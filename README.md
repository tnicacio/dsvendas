# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) DSVendas
> Projeto desenvolvido durante a Semana Spring React, de 3 a 9 de maio de 2021, da [DevSuperior](https://devsuperior.com.br). <br/>
> Pode-se visualizar a aplicação atual em: https://dsvendas-tnicacio.netlify.app/ <br/>

## O  que foi visto durante essa semana?

### :calendar: 03/mai/2021 - Aula 1: Spring e React no mercado
- Criação do front-end, através do comando ```yarn create react-app frontend --template typescript```
- Estruturação das pastas do front-end e componentização da aplicação.
- Utilização da bilbioteca [ApexCharts](https://apexcharts.com/docs/react-charts/) para criação do
[gráfico de barra](https://github.com/tnicacio/dsvendas/blob/main/frontend/src/components/BarChart/index.tsx) 
e de [rosca](https://github.com/tnicacio/dsvendas/blob/main/frontend/src/components/DonutChart/index.tsx).
- Uso do Bootstrap para estilização.
- Inicialização do projeto back-end através do [Spring Initializr](https://start.spring.io/).
- Implantação e deploy no Netlify.

### :calendar: 05/mai/2021 - Aula 2: Aprofundando na prática
- Implementação do back-end

  https://sds3-tnicacio.herokuapp.com 
  
  - Modelo de domínio em nível conceitual
    
    ![Modelo conceitual](https://user-images.githubusercontent.com/50798315/117371722-bf26f800-ae9e-11eb-8df1-6b64907702d0.png)
  
  - Estruturação do backend no padrão camadas (repositories, services, DTO's e controllers)
 
    ![Camadas](https://user-images.githubusercontent.com/50798315/117371824-ea114c00-ae9e-11eb-9a45-704562980cb1.png)

  - Criação das rotas da aplicação
  
    - Todos os vendedores
    
      ```[GET] /sellers```
      
      Retorno: 
      
      ```
      {
        "id": 1,
        "name": Anakin
      }
      ```
  
    - Consulta paginada de vendas
      
      ```[GET] /sales```
      
      Exemplo: https://sds3-tnicacio.herokuapp.com/sales?page=0&size=20&sort=date
      
      Retorno: 
      
      ```
      content: [
        {
          "id": 170,
          "visited": 78,
          "deals": 60,
          "amount": 6723,
          "date": "2019-10-07",
          "seller": {
            "id": 3,
            "name": "BarryAllen"
          }
        },
        ...
        ,
        "last": false,
        "totalPages": 9,
        "totalElements": 170,
        "sort": {
          "sorted": true,
          "unsorted": false,
          "empty": false
        },
        "first": true,
        "number": 0,
        "numberOfElements": 20,
        "size": 20,
        "empty": false
      ]
      ```

    - Total de vendas por vendedor
      
      ```[GET] /sales/amount-by-seller```
      
      Retorno: 
      
      ```
      [
        {
          "sellerName": "Logan",
          "sum": 220426.0,
        },
        ...
      ]
      ```

    - Taxa de sucesso por vendedor
      
      ```[GET] /sales/success-by-seller```

      Retorno: 
      
      ```
      [
        {
          "sellerName": "Logan",
          "visited": 1495,
          "deals": 684
        },
        ...
      ]
      ```

  - Validação no Postgres local
    - Criação de três perfis de projeto: test, dev e prod
    - Geração de script SQL no perfil dev
    - Teste do projeto no banco Postgres local

  - Implantação no Heroku
    - Criação do app no Heroku
    - Provisionamento do banco Postgres
    - Definição da variável APP_PROFILE=prod
    - Conexão ao banco via pgAdmin
    - Realização do seed do banco

### :calendar: 07/mai/2021 - Aula 3: O mapa da carreira
  detalhes em desenvolvimento...

## :computer: Tecnologias Utilizadas
- [ReactJS](https://pt-br.reactjs.org/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [PostgreSQL](https://www.postgresql.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Netlify](https://www.netlify.com/)
- [Heroku](http://heroku.com/)
