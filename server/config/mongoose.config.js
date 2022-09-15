const mongoose = require('mongoose');

const dbName = 'teammanager';

mongoose
  .connect(`mongodb://127.0.0.1:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Successfully connected to ${dbName}`);
  })
  .catch((error) =>
    console.log(`Mongoose connection to ${dbName} failed:`, error)
  );