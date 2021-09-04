const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = require('./data/database')
db.connect()


const providersRoutes = require("./routes/providersRoutes")
app.use("/", providersRoutes);

const clientsRoutes = require("./routes/clientsRoutes")
app.use("/", clientsRoutes);



module.exports = app