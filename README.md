# Bem vindo ao repositório RadarFitChallenge
Este projeto simula um app com front-end, back-end e banco de dados, onde é possivel fazer login e se cadastrar.
Caso o usuário faça login como admistrador, ele pode: administrar produtos disponíveis (adicionar produtos para a venda, atualizar produtos já disponíveis, deletar produtos do banco de dados).
Para logar como administrador, faça o login com:
```JSON

{
    "email": "admin@gmail.com",
    "password": "queijo_suiço"
}
```
Já, se o usuário fizer acesso como um usuário comum, ele pode: se cadastrar, ver celulares disponíveis para aluguel, adicionar esses celulares no carrinho virtual, conferir o carrinho. 
Para logar como usuário comum, fala o login com:

```JSON

{
    "email": "user@gmail.com",
    "password": "perna_de_grilo"
}
```

## Ferramentas no usadas BackEnd:
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

## Ferramentas no usadas FrontEnd:
<ul dir="auto">
<li>Vitejs</li>
<li>React</li>
<li>bootstrap</li>
<li>imask</li>
<li>reac-router</li>
<li>Context API</li>
<li>axios</li>
<li>cdbReact</li>
<li>rect-icons</li>
</ul>

# Utilizando a aplicação
Para ver a aplicação funcionando:
- Clone esse repositório `git clone git@github.com:AlectorAlexander/RadarFitChallenge.git`
- Entre na pasta `**/radarFit-BackEnd-App**`
- abra o terminal nessa pasta
- instale as dependências `npm install`
- starte a aplicação com `npm start`
- espere aparecer a mensagem no terminal `Running server on port: 3001`
- Agora, sem fechar esse último terminal, navegue até a pasta `radarFit-FrontEnd`
- instale as dependências `npm install`
- starte a aplicação com `npm start`
