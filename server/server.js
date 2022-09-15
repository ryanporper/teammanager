const express = require('express');
const cors = require('cors');
const port = 8000;

const { teamRouter } = require('./routes/team.routes');

require('./config/mongoose.config');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/teams', teamRouter);

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);