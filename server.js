const axios = require("axios");
const express = require("express");
const app = express();

app.use( express.json() );

app.get("/styles.css", function (req,res){
  res.sendFile( __dirname + "/styles.css")
});

app.get("/app", function(req,res) {

  res.sendFile( __dirname + "/app.html" );

});


app.post("/SearchRequest", async function(req,res){

  const response = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/search",
    {params: {q: req.body.q, isHighlight: req.body.isHighlight, medium: req.body.medium}});
  
    res.json(
      {
        "total": response.data.total,
        "objectIDs": response.data.objectIDs
    
      }
    )
  

});

app.post("/ObjectRequest", async function(req,res){

  const response = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + req.body.objectID)
  
    res.json(
      {
        "title": response.data.title,
        "artist": response.data.artistDisplayName,
        "bio": response.data.artistDisplayBio,
        "medium": response.data.medium,
        "image": response.data.primaryImageSmall
        
      }
    )
  

});

app.listen(3000, function() {
    console.log("Server is listening on port 3000...");
});