require('.');
require('http')
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(process.env, '', 2));
  })
  .listen(process.env.PORT || 3000);
