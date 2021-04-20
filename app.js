const { response } = require("express");
const express = require("express");
const app = express()

let usuarios = [
  {nome: "Caio", sobrenome: "Neves"}
];

// http://localhost:8081/inicio
app.get("/inicio",function(request,response){
    return response.send("Alô Alô, Graças a Deus!");
})

// http://localhost:8081/usuarios
app.get("/usuarios", (request, response) => {
  return response.json(usuarios);
})

app.listen (8081,() => {
  console.log("servidor rodando!!!");
})
