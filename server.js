const axios = require("axios");
const express = require("express");
const app = express();

app.use( express.json() );

app.get("/app", function(req,res) {

  res.sendFile( __dirname + "/app.html" );

});

app.listen(3000, function() {
    console.log("Server is listening on port 3000...");
});