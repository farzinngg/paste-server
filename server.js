const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pastes = {};

app.use(bodyParser.json());

// Route to create a paste
app.post('/create-paste', (req, res) => {
  const pasteId = Math.random().toString(36).substring(2, 10);
  pastes[pasteId] = req.body.text;
  res.json({ link: `http://your-server-address/paste/${pasteId}` });
});

// Route to retrieve a paste
app.get('/paste/:id', (req, res) => {
  const pasteContent = pastes[req.params.id];
  if (pasteContent) {
    res.send(`<h1>Paste Content</h1><p>${pasteContent}</p>`);
  } else {
    res.send(`<h1>Paste Not Found</h1>`);
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
