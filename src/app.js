const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();

app.disable('x-powered-by');
app.set('port', 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
);

app.post('/search-form', (req, res) => {
  // res.redirect('/');
  fetch(
    `https://soccer.sportmonks.com/api/v2.0/players/search/${req.body.player}?api_token=FesbgygxBGexuNRGjXWkUT8G15ikrjjo2HPwG2Nj85mnMYQIQIs3hQcgt5yv`
  )
    .then((data) => data.json())
    .then((data) => res.json(data));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
});

app.use((err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, '..', 'public', '500.html'));
});

// listen on dynamic port number
app.listen(app.get('port'), () => {
  console.log('App running on port', app.get('port'));
});
