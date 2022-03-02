/* eslint-disable linebreak-style */
const app = require('./app');

// listen on dynamic port number
app.listen(app.get('port'), () => {
  console.log('App running on port', app.get('port'));
});
