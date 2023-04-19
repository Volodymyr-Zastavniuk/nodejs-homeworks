const app = require('./app');

module.exports = app.listen(process.env.PORT, err => {
  if (err) console.error('Error at server launch', err.message);
  console.log('Server running. Use our API on port: '`${process.env.PORT}`);
});
