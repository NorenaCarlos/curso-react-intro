const express = require("express");
const app = express();
const port = 62300;
const routerApi = require('./routes');
routerApi(app);
app.get("/",(request, response)=>{
  response.send("Hola mi server en express");
});






app.listen(port,()=>{
  console.log("Servidor iniciado en el puerto "+port);
});
