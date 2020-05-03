import fs from "fs";
import path from "path";

let stream = fs.createReadStream(path.join(__dirname, "data.txt"));

stream.on("data", function (data) {
  var chunk = data.toString();
  console.log("chunk", chunk);
});



// let stream = fs.createWriteStream(path.join(__dirname, "data.txt"))

// stream.write("Tutorial on Node j1 \n")
// stream.write("Tutorial on Node j2 \n")
// stream.write("Tutorial on Node j3 \n")
// stream.write("Tutorial on Node j4 \n")