const mongoose = require('mongoose');
const Provider = require("../models/provider");
const SECRET = process.env.SECRET
//console.log(process.env)

const getAllProviders = async (req, res) => {
    const authHeader = req.get('authorization');
    const token = authHeader.split(' ')[1]
    // console.log(token)
  
    if (!token) {
      return res.status(403).send({message: "Kd a tokenzinnn"})
    }
    // usar método do jwt para autenticar a rota
      // verificação do token com o SECRET do projeto
    jwt.verify(token, SECRET, async (err) => {
      if (err) {
        res.status(403).send({ message: 'Token não válido', err})
      }

    const providers = await Provider.find()
    res.status(200).json(providers)
    })
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

const providersByCity = (req, res) => {
    const city = req.params.cidade;
    Provider.find(
      { cidade: city },
      (err, provider) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        } else if (provider) {
          return res.status(200).send(provider);
        }
        res.status(404).send("City not found!");
      }
    );
  };

  const providersByServico = (req, res) => {
    const servico = req.params.servico;
    Provider.find(
      { servico: servico },
      (err, provider) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        } else if (provider) {
          return res.status(200).send(provider);
        }
        res.status(404).send("Service not found");
      }
    );
  };




module.exports = {
    getAllProviders,
    createProvider,
    deleteProvider,
    upadateEmail,
    upadateCidade,
    upadateServico,
    providersByCity,
    providersByServico
}