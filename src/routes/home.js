const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('<h1>Huy</h1>')
});

module.exports = router;
