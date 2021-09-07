const app = require("./src/app.js")

const PORT = process.env.PORT || 3000

app.listen(PORT,() =>{
    console.log(`Meu servidor rodando na porta ${PORT}`) 
})