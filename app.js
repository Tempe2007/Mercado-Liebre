const { log } = require("console");
const express = require("express");
const fs = require("fs");
const paht = require("path");

const app = express();
const puerto = 3030;

app.listen(puerto, () => {
  console.log("Aplicacion corriendo en el puerto 3030");
});

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/home", (req,res) => {
  res.sendFile(__dirname + "/views/home.html");
});
 
app.get("/register", (req,res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req,res) => {
  res.sendFile(__dirname + "/views/login.html");
});
