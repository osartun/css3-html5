const express = require('express');
const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;

app.use(express.static('public'));

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('> Ready on http://localhost:' + port);
  }
});
