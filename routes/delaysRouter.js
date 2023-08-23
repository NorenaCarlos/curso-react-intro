const express = require("express");
const router = express.Router();

router.get("/:moreDelayed/name/:idLoan",(request, response)=>{
  const { moreDelayed, idLoan } = request.params;
  response.json({
    moreDelayed,
    idLoan,
  });
});

module.exports = router;
