const express = require("express");
const app = express();
const cors = require('cors')

require("dotenv").config();
let dbConnect = require("./dbConnect");
let userRoutes = require('./Routes/userRoutes')

// parse requests of content-type -application/json
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
res.json({ message: "Welcome to my Capstone application." });
});

app.use('/users', userRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});