    const mongoose = require('mongoose');
    const Client = require("../models/client");

const getById = async (req, res) => {
    const clients = await Client.findById(req.params.id)
    res.status(200).json(clients)
};

const deleteClient = async (req, res) => {
    const client = await Client.findById(req.params.id)
     if(client == null){
            return res.status(404).json({message: "Cliente não encontrado."})
        }
        try{
            await client.remove()
            res.status(200).json({ message: "Cliente excluída com sucesso." })
        } catch (err){
            res.status(500).json({ message: err.message})
        }
};

const createClient =  async (req,res) => {
    const client = new Client ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        email: req.body.email
    })

    const newClient = await client.save()
    
    res.status(201).json(newClient)
};

const upadateEmail = async (req, res)=>{
    try{
        const client = await Client.findById(req.params.id)
        if(client == null){
            return res.status(404).json({message: "Cliente não encontrada."})
        }
        if(req.body.email != null){
            client.email = req.body.email
        }
        const clientAtualizada = await client.save()
        res.status(200).json(clientAtualizada)
    }catch (err){
        res.status(500).json({ message: err.message})
    }
}

module.exports = {
    getById,
    deleteClient,
    createClient,
    upadateEmail
    
}