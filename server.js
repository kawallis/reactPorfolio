const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// app.use(express.static('./public'));

app.get('/', (req, res)  => {
  res.send('yoyo');
});


app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});