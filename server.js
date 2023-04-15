const app = require('./app');

module.exports = app.listen(3000, err => {
  if (err) console.error('Error at server launch', err.message);
  console.log('Server running. Use our API on port: 3000');
});
