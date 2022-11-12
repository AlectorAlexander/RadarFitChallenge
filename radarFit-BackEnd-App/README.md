# Bem vindo ao repositório RadarFitChallenge BackEnd

# Ferramentas no usadas BackEnd:
<ul dir="auto">
<li>Nodejs</li>
<li>MongoDB</li>
<li>mongoose</li>
<li>Express</li>
<li>md5</li>
<li>zod</li>
<li>JWT</li>
<li>bcryptjs</li>
<li>typescript</li>
</ul>

# Utilizando a aplicação
Para ver a aplicação funcionando:
- Clone esse repositório `git clone git@github.com:AlectorAlexander/RadarFitChallenge.git`
- Entre na pasta `**/radarFit-BackEnd-App**`
- abra o terminal nessa pasta
- instale as dependências `npm install`
- starte a aplicação com `npm start`
- espere aparecer a mensagem no terminal `Running server on port: 3001`

#Rotas

## Endpoint `/produtos`

### Rota do tipo `POST`

- O body da requisição deve conterá o seguinte formato:
  ```json
  {
        "produto": "I14Pro Max",
        "valor": 700,
        "descricao": "Adotada tela IPS HD de 6,1 polegadas, o smartphone de 6,1 polegadas traz uma experiência visual mais ampla e cores e nitidez extraordinárias, permitindo que você explore todos os detalhes e maximize sua experiência visual.",
        "url_image": "https://m.media-amazon.com/images/I/51Qw3q+aeXL._AC_SY300_SX300_.jpg",
        "created": "2022-11-12T16:51:00.186Z",
        "updated": "2022-11-12T16:51:00.186Z"
   }
  ```
  
- Sua API deve responder com status HTTP 200 e o seguinte body:
 
  ```json
  {
    "produto": "I14Pro Max",
    "valor": 700,
    "descricao": "Adotada tela IPS HD de 6,1 polegadas, o smartphone de 6,1 polegadas traz uma experiência visual mais ampla e cores e nitidez extraordinárias, permitindo que você explore todos os detalhes e maximize sua experiência visual.",
    "url_image": "https://m.media-amazon.com/images/I/51Qw3q+aeXL._AC_SY300_SX300_.jpg",
    "created": "2022-11-12T16:51:00.186Z",
    "updated": "2022-11-12T16:51:00.186Z",
    "_id": "636fde5ce9136038bd7ded67",
    "__v": 0
    }
  ```
## Endpoint `/produtos/636fcef48d1fc54f9e79471a`
### Rota do tipo `PUT`

- O body da requisição deve conterá o seguinte formato:
  ```json
  {
        "produto": "I14Pro Max2",
        "valor": 700,
        "descricao": "Adotada tela IPS HD de 6,1 polegadas, o smartphone de 6,1 polegadas traz uma experiência visual mais ampla e cores e nitidez extraordinárias, permitindo que você explore todos os detalhes e maximize sua experiência visual.",
        "url_image": "https://m.media-amazon.com/images/I/51Qw3q+aeXL._AC_SY300_SX300_.jpg",
        "created": "2022-11-12T16:51:00.186Z",
        "updated": "2022-11-12T16:51:00.186Z"
   }
  ```
  
 - Sua API deve responder com status HTTP 200 e o seguinte body:
 
  ```json
  {
    "_id": "636fcef48d1fc54f9e79471a",
    "produto": "I14Pro Max",
    "valor": 700,
    "descricao": "Adotada tela IPS HD de 6,1 polegadas, o smartphone de 6,1 polegadas traz uma experiência visual mais ampla e cores e nitidez extraordinárias, permitindo que você explore todos os detalhes e maximize sua experiência visual.",
    "url_image": "https://m.media-amazon.com/images/I/51Qw3q+aeXL._AC_SY300_SX300_.jpg",
    "created": "2022-11-12T16:51:00.186Z",
    "updated": "2022-11-12T16:51:00.186Z",
    "__v": 0
    }
  ```
  
 ## Endpoint `/produtos`
### Rota do tipo `GET`
  
 - Sua API deve responder com status HTTP 201 e o seguinte body:
 
  ```json
  [
    {
        "_id": "636fcef48d1fc54f9e79471a",
        "produto": "I14Pro Max",
        "valor": 700,
        "descricao": "Adotada tela IPS HD de 6,1 polegadas, o smartphone de 6,1 polegadas traz uma experiência visual mais ampla e cores e nitidez extraordinárias, permitindo que você explore todos os detalhes e maximize sua experiência visual.",
        "url_image": "https://m.media-amazon.com/images/I/51Qw3q+aeXL._AC_SY300_SX300_.jpg",
        "created": "2022-11-12T16:51:00.186Z",
        "updated": "2022-11-12T16:51:00.186Z",
        "__v": 0
    },
    {
        "_id": "636fcef48d1fc54f9e79471b",
        "produto": "iPhone X Prata",
        "valor": 1850,
        "descricao": "O novo smartphone da Apple, o iPhone X, traz tantas novidades incríveis que vai fazer você repensar o modo como você usa o seu smartphone. Seu novo design, ainda mais bonito, foi construído com um resistente vidro na frente e atrás. ",
        "url_image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnplrVZyb67Z3iA8nGTMlUMsV-yfWETV3kHsGkmDvVNZgTIiaROmNgMb6ynO2YXLoEiy5NjjgtyIK3lj-DHxk2srm1GWdVt_SZwZYnMRINyPDaM0WDGUp6-g",
        "created": "2022-11-12T16:51:00.186Z",
        "updated": "2022-11-12T16:51:00.186Z",
        "__v": 0
    },
    {
        "_id": "636fcef48d1fc54f9e79471c",
        "produto": "Samsung Galaxy M13",
        "valor": 850,
        "descricao": "O Galaxy A13 combina cores elegantes e suavidade ao toque. As curvas refinadas o tornam confortável para segurar e facilitam a navegação na tela. Escolha entre as cores Preta, Branca, Azul e Rose.",
        "url_image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnplrVZyb67Z3iA8nGTMlUMsV-yfWETV3kHsGkmDvVNZgTIiaROmNgMb6ynO2YXLoEiy5NjjgtyIK3lj-DHxk2srm1GWdVt_SZwZYnMRINyPDaM0WDGUp6-g",
        "created": "2022-11-12T16:51:00.186Z",
        "updated": "2022-11-12T16:51:00.186Z",
        "__v": 0
    }
[...]
]
  ```
  ## Endpoint `/produtos/636fcef48d1fc54f9e79471a`
### Rota do tipo `DELETE`

  
 - Sua API deve responder com status HTTP 204.
 
 ## Endpoint `/login`

### Rota do tipo `POST`

- O body da requisição deve conterá o seguinte formato:
  ```json
  {
        "email": "admin@gmail.com",
        "senha": "queijo_suiço"
    }
  ```
  
 - Sua API deve responder com status HTTP 200 e o seguinte body:
 
  ```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiQWxiZXJ0byBKdXN0dXMiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbmlzdHJhZG9yIiwiaWF0IjoxNjY4Mjc2OTQyLCJleHAiOjE2Njg4ODE3NDJ9.LbOZ2nUZOP1UGhAlobTeNF35J5OIa4WKopYrDNLxuwk"
}
  ```
## Endpoint `/register`

### Rota do tipo `POST`

- O body da requisição deve conterá o seguinte formato:
  ```json
  {
        "nome": "alberto",
        "email": "alberto@gmail.com",
        "role": "user",
        "senha": "queijo_suiço"
      }
  ```
  
 - Sua API deve responder com status HTTP 201 e o seguinte body:
 
  ```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiQWxiZXJ0byBKdXN0dXMiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbmlzdHJhZG9yIiwiaWF0IjoxNjY4Mjc2OTQyLCJleHAiOjE2Njg4ODE3NDJ9.LbOZ2nUZOP1UGhAlobTeNF35J5OIa4WKopYrDNLxuwk"
}
  ```
 
  
  
