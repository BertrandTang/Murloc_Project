// We imported the Router module in express
const { Router } = require('express');
// Then we assigned it to the variable router
const router = Router();

// using the get method, we're rendering the home page
router.get('/', (req, res) => {
    res.render('home')
  });

  // We export our module so that we can connect it to our index.js (we will need to require router there)
  module.exports = router;