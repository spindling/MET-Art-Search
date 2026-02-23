const axios = require("axios");
const express = require("express");
const app = express();

app.use( express.json() );

app.get("/app", function(req,res) {

  res.sendFile( __dirname + "/app.html" );

});


app.post("/METRequest", async function(req,res){

  const response = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/search",
    {params: {q: req.body.q, isHighlight: req.body.isHighlight, medium: req.body.medium}});
  
    res.json(
      {
        "total": response.data.total,
        "objectIDs": response.data.objectIDs
        
        
      }
    )
  

});

app.listen(3000, function() {
    console.log("Server is listening on port 3000...");
});