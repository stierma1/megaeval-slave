
var express = require("express");
var {MapHandler, ConcatMapHandler, FlatMapHandler, ReduceHandler, FilterHandler, FlatFilterHandler, ConcatFilterHandler} = require("megaeval").Server;

var app = express();
var port = 8070;
if(process.argv[2]){
  port = process.argv[2];
}

app.post("/map", MapHandler);
app.post("/flat-map", FlatMapHandler);
app.post("/concat-map", ConcatMapHandler);
app.post("/filter", FilterHandler);
app.post("/flat-filter", FlatFilterHandler);
app.post("/concat-filter", ConcatFilterHandler);
app.post("/reduce", ReduceHandler);

app.listen(port);
