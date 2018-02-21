
var express = require("express");
var {MapHandler, ConcatMapHandler, FlatMapHandler, ReduceHandler, FilterHandler, FlatFilterHandler, ConcatFilterHandler} = require("megaeval").Server;

var app = express();
var port = 8070;
var auth = undefined;

for(var i in process.argv){
  if(process.argv[i].indexOf("--port=") >= 0){
    port = process.argv[i].split("=")[1];
  }
  if(process.argv[i].indexOf("--auth=") >= 0){
    auth = process.argv[i].split("=")[1];
  }
}


function authHandler(req, res, next){
  var authHeader = req.headers["Auth"];
  if(authHeader === auth){
    next();
    return;
  }
  next(new Error("Unauthorized"));
}
app.use(authHandler)
app.post("/map", MapHandler);
app.post("/flat-map", FlatMapHandler);
app.post("/concat-map", ConcatMapHandler);
app.post("/filter", FilterHandler);
app.post("/flat-filter", FlatFilterHandler);
app.post("/concat-filter", ConcatFilterHandler);
app.post("/reduce", ReduceHandler);

app.listen(port);
