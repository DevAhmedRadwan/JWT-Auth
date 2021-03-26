const app = require("./app");
const http = require("http");

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

const port = normalizePort(process.env.PORT || "3700");
app.set("port", port);
const server = http.createServer(app);
server.listen(port);