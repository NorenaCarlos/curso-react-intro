const express = require("express");
const app = express();
const port = 62300;
const routerApi = require('./routes');
app.use(express.json());

routerApi(app);

app.get("/",(request, response)=>{
  response.send("Ingresó a login");
});






app.listen(port,()=>{
  console.log("Servidor iniciado en el puerto "+port);
});
