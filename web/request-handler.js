var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

exports.handleRequest = function (req, res) {

  if (req.method === 'GET') {

    var headers = defaultCorsHeaders;
    headers['Content-Type'] = 'text/plain';
    res.writeHead(200, headers);
    res.end(archive.paths.list);

  } else if (req.method === 'POST') {

  }


};
