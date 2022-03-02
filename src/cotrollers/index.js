const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/search-form', (req, res) => {
  fetch(
    `https://soccer.sportmonks.com/api/v2.0/players/search/${req.body.player}?api_token=FesbgygxBGexuNRGjXWkUT8G15ikrjjo2HPwG2Nj85mnMYQIQIs3hQcgt5yv`
  )
    .then((data) => data.json())
    .then((data) => res.json(data));
});
module.exports = router;
