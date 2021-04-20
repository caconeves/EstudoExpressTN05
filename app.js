const { response } = require("express");
const express = require("express");
const app = express()

//indica para express que usaremos o post
app.use(express.json());

let usuarios = [
  {nome: "Caio", sobrenome: "Neves"}
];

// http://localhost:8081/inicio
app.get("/inicio",function(request,response){
    return response.send("Alô Alô, Graças a Deus!");
})

// http://localhost:8081/usuarios
app.post("/usuarios", (request, response) => {
  const { nome, sobrenome } = request.body;

  usuarios.push({ nome, sobrenome });

  return response.json({ nome, sobrenome });

})

//http://localhost:8081/usuarios/caio
app.put("/usuarios/:nome", (request, response) => {
  const { nome } = request.params;
  
  const { sobrenome } = request.body;
})

// http://localhost:8081/usuarios
app.get("/usuarios", (request, response) => {
  return response.json(usuarios);
})

app.listen (8081,() => {
  console.log("servidor rodando!!!");
})