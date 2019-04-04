var express =  require("express");
var app = express();
var request = require("request")
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("search");
});


app.get("/results", (req, res) => {
  var query = req.query.search;
  var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";

  request(url, (error,response,body) => {
    if(!error && response.statusCode == 200) {
      var data = JSON.parse(body)
      res.render("results", {data: data});
    }
  });

});


app.listen(process.env.PORT, process.env.IO, () => {
  console.log("Movie App has started!")
});

app.listen(3000, function () {
console.log("Express server listening on port 3000");
})
