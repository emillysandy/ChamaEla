const mongooose = require('mongoose')

const connect = () => {mongooose.connect('mongodb://localhost:27017/chamaela-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log('Database conectada com sucesso'))
    .catch(err => console.err)
}

module.exports = {connect}