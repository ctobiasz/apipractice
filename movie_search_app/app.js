var express =  require("express");
var app = express();
var request = require("request")

app.get("/results", (req, res) => {
  request("http://omdbapi.com/?s=New&apikey=thewdb", (error,response,body) => {
    if(!error && response.statusCode == 200) {
      var results = JSON.parse(body)
      res.send(results["Search"][0]);
    }
  })

});


app.listen(process.env.PORT, process.env.IO, () => {
  console.log("Movie App has started!")
});


app.listen(3000, function () {
console.log("Express server listening on port 3000");
})