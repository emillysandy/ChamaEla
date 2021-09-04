const app = require("./src/app.js")

const PORT = process.env.PORT || 8080

app.listen(PORT,() =>{
    console.log("Meu servidor rodando na porta 8080") 
})