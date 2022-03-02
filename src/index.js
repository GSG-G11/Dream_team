/* eslint-disable linebreak-style */
const app = require('./app');

const port = process.env.PORT || 8080;
// listen on dynamic port number
app.listen(port, () => {
  console.log('App running on port', port);
});
