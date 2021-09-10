const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const providersControllers = require("../controllers/providersControllers");

router.get("/oi", (req, resp)=>{
    resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})
});

router.get("/providers", providersControllers.getAllProviders);
router.get("/providers/:cidade",providersControllers.providersByCity);
router.get("/providers/:servico",providersControllers.providersByServico);

router.post("/providers/cadastrar", providersControllers.createProvider);

router.delete("/providers/:id", providersControllers.deleteProvider);

router.patch("/providers/email/:id", providersControllers.upadateEmail);
router.patch("/providers/cidade/:id", providersControllers.upadateCidade);
router.patch("/providers/servico/:id", providersControllers.upadateServico)

module.exports = router