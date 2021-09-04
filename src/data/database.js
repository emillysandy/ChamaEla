
require('dotenv').config()
const mongooose = require('mongoose')

const MONGO_URL = process.env.MOGODB_URI

const connect = () => {mongooose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
   .then(()=>{
        console.log("Conectadas bb no MongoDb Atlas")
    })
    .catch((error)=>{
        console.log("Algo deu errado")
        console.error(error)
    })
}

module.exports = {connect}
