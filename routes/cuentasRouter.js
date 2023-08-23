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
  response.json({
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
});

module.exports = router;
