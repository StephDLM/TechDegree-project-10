'use strict';

const { sequelize, models } = require('./models');
const routes = require('./routes')
const cors = require('cors');

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
}

app.use(cors(corsOptions));

// load modules
const express = require('express');
const morgan = require('morgan');


// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// create the Express app
const app = express();
app.use(express.json());
app.use('/api', routes);


(async () => {
  try {
    // Test the connection to the database
    await sequelize.authenticate();
    console.log('Connection to the database successful!');

    // Sync the models
    console.log('Synchronizing the models with the database...');
    await sequelize.sync(); //took out force(true) to avoid over writing database when i start my app

  } catch(error) {
    throw error;
  }
})();

// setup morgan which gives us http request logging
app.use(morgan('dev'));

// setup a friendly greeting for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the REST API project!',
  });
});

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

// set our port
app.set('port', process.env.PORT || 5000);

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});

console.log('Testing the connection to the database...');

// Test the connection to the database: 
console.log('Testing the connection to the database...');

