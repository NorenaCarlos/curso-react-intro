const express = require("express");
const router = express.Router();

const ClientsService = require("./../services/clientService");
const clientsService = new ClientsService();
router.get("/",(request, response)=>{

  const { clientId } = request.query;
  if(clientId){

    const client = clientsService.findOne(clientId);
    response.json(client);
  }else{
    const clientsList = clientsService.find();
    response.json(clientsList);
  }

});

router.get("/:id",(request, response)=>{
  const { id } = request.params;
  if(id==="999"){
    response.status(404).json({
      message: "Error cuenta no encontrada"
    });
  }else{
    response.status(200).json({
      id: id,
      name: "Ernesto Guevata",
      date: "22/06/1970",
      interest: 20,
      Message: "Su prestamo es para el sostenimiento del campo de concentración de maricas",
      amount: 100,
      payable: 120,
      quota: 10,
      delays: 0,
      lenderId: 1
    });
  }

});

router.post("/",(request, response)=>{
  var data = request.body;
  const newClient = clientsService.create(data);
  response.status(201).json(newClient);
});

router.patch("/",(request, response)=>{
  const {id} = request.query;
  var data = request.body;
  const client = clientsService.update(id,data);
  response.status(201).json(client);
});

router.delete("/",(request, response)=>{
  const {id} = request.query;
  response.json({
    message: "deleted",
    id
  });
});

module.exports = router;
