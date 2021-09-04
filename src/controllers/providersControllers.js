const mongoose = require('mongoose');
const Provider = require("../models/provider");

const getAllProviders = async (req, res) => {
    const providers = await Provider.find()
    res.status(200).json(providers)
};

const createProvider = async (req,res) => {
    const provider = new Provider ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        cidade: req.body.cidade,
        email: req.body.email,
        servico: req.body.servico

    })
    const newProvider = await provider.save()
    res.status(201).json(newProvider)
};

const deleteProvider = async (req, res) => {
    const provider = await Provider.findById(req.params.id)
     if(provider == null){
            return res.status(404).json({message: "Prestadora de serviço não encontrada em nosso banco de dados."})
        }
        try{
            await provider.remove()
            res.status(200).json({ message: "Prestadora de serviço excluída com sucesso." })
        } catch (err){
            res.status(500).json({ message: err.message})
        }
};

const upadateEmail = async (req, res)=>{
    try{
        const provider = await Provider.findById(req.params.id)
        if(provider == null){
            return res.status(404).json({message: "Prestadora de serviço não encontrada."})
        }
        if(req.body.email != null){
            provider.email = req.body.email
        }
        const providerAtualizada = await provider.save()
        res.status(200).json(providerAtualizada)
    }catch (err){
        res.status(500).json({ message: err.message})
    }
};

const upadateCidade = async (req, res)=>{
    try{
        const provider = await Provider.findById(req.params.id)
        if(provider == null){
            return res.status(404).json({message: "Prestadora de serviço não encontrada."})
        }
        if(req.body.cidade != null){
            provider.cidade = req.body.cidade
        }
        const providerAtualizada = await provider.save()
        res.status(200).json(providerAtualizada)
    }catch (err){
        res.status(500).json({ message: err.message})
    }
};

const upadateServico = async (req, res)=>{
    try{
        const provider = await Provider.findById(req.params.id)
        if(provider == null){
            return res.status(404).json({message: "Prestadora de serviço não encontrada."})
        }
        if(req.body.servico != null){
            provider.servico = req.body.servico
        }
        const providerAtualizada = await provider.save()
        res.status(200).json(providerAtualizada)
    }catch (err){
        res.status(500).json({ message: err.message})
    }
}

{/*const getByCity = (request,res) => {
    const requestedCity = request.query.cidade.toLowerCase()

    const filteredCity = providers.find(providers => providers.cidade.toLowerCase().includes(requestedCity))

    if(requestedCity == "" || filteredCity == undefined){
        res.status(404).send({
            "message": "Por favor, insira um título válido."
        })
    }else{
        res.status(200).send(filteredCity)
    }
};
router.get("/providers/cidade", async (req,res) => {
    const requestedCity = req.params.cidade
    const selectedCity = await Provider.find({cidade: requestedCity})
    res.status(200).json(selectedCity)
});

router.get("/providers/servico", async (req,res) => {
    const requestedService = req.params.servico
    const selectedService = await Provider.find({servico: requestedService})
    res.status(200).json(selectedService)
});

const deleteProvider = (request, response) => {
    const idRequirido = request.params.id;
    const filteredProvider = providers.find(providers => providers.id == idRequirido);

    const indice = providers.indexOf(filteredProvider)
    providers.splice(indice, 1);

    response.status(200).send(
        [
            {
                "mensagem": "Prestadora de serviço deletada com sucesso"

            },
            providers
        ]
    )
}*/}





module.exports = {
    getAllProviders,
    createProvider,
    deleteProvider,
    upadateEmail,
    upadateCidade,
    upadateServico
}