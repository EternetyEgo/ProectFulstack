const express = require("express");
const apis = require("./server/apis");
const app = express();
const cors = require('cors');
app.use(cors());


require("./server/db")();
apis(app);


const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`working on ${port} port`);
});
