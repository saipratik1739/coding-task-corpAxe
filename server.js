const express = require("express");
const path = require("path");
var cors = require('cors');

const app = express();
app.use(cors()); // to handle preflight OPTIONS request


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => { console.log("port -->", PORT); });


//  ------------------------------------------- keep this at the last -----------------------------------------
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/build")));

  app.get("*", (req, res) => {
    res.sendfile(path.join(__dirname + "/build/index.html"));
  });
}
