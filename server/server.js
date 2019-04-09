const express = require('express');
const port = 4000

const app = express();

app.use(express.json());

// ----- ADD ENDPOINTS BELOW ----- \\

// ----- ADD ENDPOINTS ABOVE -----\\

app.listen(port, () => {
  console.log("Now listening on port " + port)
})