const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const contactsRouter = require('./routes/contactsRoutes');
const usersRouter = require('./routes/usersRoutes');

dotenv.config({ path: './.env' });

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(con => console.log('Database connection successful'))
  .catch(err => {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  });

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
