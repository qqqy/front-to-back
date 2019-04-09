const express = require('express');
const port = 4000

const app = express();

app.use(express.json());

app.get('/test' , (req, res) => res.status(200).send("Server Working!"));



app.listen(port, () => {
  console.log("Now listening on port " + port)
})