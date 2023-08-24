const express = require("express");
const router = express.Router();
router.get("/",(request, response)=>{
  response.json({
    id: 1,
    name: "Ernesto Guevata",
    date: "22/06/1970",
    interest: 20,
    Message: "Su prestamo es para el sostenimiento del campo de concentración de maricas",
    amount: 100,
    payable: 120,
    quota: 10,
    delays: 0
  });
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
  response.status(201).json(data);
});

router.patch("/",(request, response)=>{
  const {id,balance} = request.query;
  var data = request.body;
  response.json({
    message: "updated",
    data,
    NewBalance: balance,
    id
  });
});

router.delete("/",(request, response)=>{
  const {id} = request.query;
  response.json({
    message: "deleted",
    id
  });
});

module.exports = router;
