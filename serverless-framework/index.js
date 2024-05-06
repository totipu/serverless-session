const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.get('/api/v1/helloGet', (req, res) => {
   res.send({message: "Hello from demo service"});
})
app.post('/api/v1/helloPost', (req, res) => {
   res.send({message: "Hello from demo service", body: req.body});
})
app.listen(5000, () => {
   console.log("Server started on port 5000");
})