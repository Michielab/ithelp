'use strict';

const mongoose = require('mongoose');
const dbName = 'it-help';

// connect to the database
mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://heroku_tz10h942:fplsc61l4lauj3h1thp4ia4voh@ds133260.mlab.com:33260/heroku_tz10h942`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Connected to the ${dbName} database`);
});
