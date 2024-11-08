var express = require('express');
var router = express.Router();

/* Sample toy data */
const toys = [
    { name: 'RC Car', type: 'Plastic toy', price_range: '30-100 $' },
    { name: 'Teddy Bear', type: 'Stuffed toy', price_range: '5-10 $' },
    { name: 'Puzzle', type: 'Wooden toy', price_range: '10-70 $' }
];

// Update the route to just '/' for the toys
router.get('/', (req, res) => {
    res.render('toys', { title: 'Toys', toys: toys });
});

module.exports = router;