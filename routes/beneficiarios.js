const { Router } = require('express')
const router = Router()


router.get("/", (req, res) => {
    const {IdBeneficiario, IdUsuario } = req.query
    res.json({
      msg: "GET API",
      IdBeneficiario,
      IdUsuario
      
    });
  });


router.post("/", (req, res) => {
  //recibe la desestructuracion
  //endiados por body
  const {IdBeneficiario, IdUsuario} = req.body
  res.json({
    msg: "POST API",
    IdBeneficiario,
    IdUsuario
  

  });
});

router.put("/", (req, res) => {
    res.json({
      msg: "PUT API",
    });
  });



router.delete("/", (req, res) => {
    res.json({
      msg: "DELETE API",
    });
  });

router.patch("/", (req, res) => {
  res.json({
    msg: "PATCH API",
  });
});


module.exports = router;