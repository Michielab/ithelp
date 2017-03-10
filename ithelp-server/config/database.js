'use strict';

const mongoose = require('mongoose');
const dbName = 'it-help';

// connect to the database
mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost/${dbName}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Connected to the ${dbName} database`);
});
