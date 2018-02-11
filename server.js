
var express = require("express");
var {MapHandler, ConcatMapHandler, FlatHandler} = require("megaeval").Server;

var app = express();
var port = 8070;
if(process.argv[2]){
  port = process.argv[2];
}

app.post("/map", MapHandler);
app.post("/flat-map", FlatHandler);
app.post("/concat-map", ConcatMapHandler);

app.listen(port);
