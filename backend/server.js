const app = require("./app");
const http = require("http");
const path = require("path");
const dotenv = require("dotenv");

// config the dotenv
const configPath = path.join(__dirname,".env");
dotenv.config({ path: configPath });

// normalizePort function
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

// normalize port
const port = normalizePort(process.env.PORT || "3700");
// set app port
app.set("port", port);
// create the server using http
const server = http.createServer(app);
// listen on the port
server.listen(port);
