const express = require('express');

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('tools found');
// });

// router.post('/', (req, res) => {
//   res.send('tools added');
// });

router.route('/').get((req, res) => {
  res.send('tools found');
}).post((req, res) => {
  res.send('tools added');
});

module.exports = router;