const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const clientsControllers = require("../controllers/clientsControllers");

router.get("/oi", (req, resp)=>{
    resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})
});


router.get("/clients/:id", clientsControllers.getById)

router.post("/clients/cadastrar", clientsControllers.createClient)

router.delete("/clients/:id", clientsControllers.deleteClient);

router.patch("/clients/atualizar/:id", clientsControllers.upadateEmail);

module.exports = router