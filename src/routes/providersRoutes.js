const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const providersControllers = require("../controllers/providersControllers");


router.get("/providers", providersControllers.getAllProviders);

router.post("/providers/cadastrar", providersControllers.createProvider);

router.delete("/providers/:id", providersControllers.deleteProvider);

router.patch("/providers/email/:id", providersControllers.upadateEmail);
router.patch("/providers/cidade/:id", providersControllers.upadateCidade);
router.patch("/providers/servico/:id", providersControllers.upadateServico)

module.exports = router