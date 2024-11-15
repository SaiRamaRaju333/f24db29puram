// var express = require('express');
// var router = express.Router();

// /* Sample toy data */
// const toys = [
//     { name: 'RC Car', type: 'Plastic toy', price_range: '30-100 $' },
//     { name: 'Teddy Bear', type: 'Stuffed toy', price_range: '5-10 $' },
//     { name: 'Puzzle', type: 'Wooden toy', price_range: '10-70 $' }
// ];

// // Update the route to just '/' for the toys
// router.get('/', (req, res) => {
//     res.render('toys', { title: 'Toys', toys: toys });
// });

// module.exports = router;

var express = require('express');
var router = express.Router();
var toy_controller = require('../controllers/toys');

router.get('/', toy_controller.toy_list);

router.post('/create', toy_controller.toy_create_post);

router.get('/:id', toy_controller.toy_detail);

// router.get('/:id/update', toy_controller.toy_update_get);

// router.get('/:id/delete', toy_controller.toy_delete_get);

// router.post('/:id/update', toy_controller.toy_update_post);

// router.post('/:id/delete', toy_controller.toy_delete_post);

module.exports = router;