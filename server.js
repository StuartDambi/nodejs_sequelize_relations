const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`listening on http://localhost:${port}`))
})
