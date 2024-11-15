// var express = require('express');
// var router = express.Router();
// // Require controller modules.
// var api_controller = require('../controllers/api');
// var toy_controller = require('../controllers/toys');
// /// API ROUTE ///
// // GET resources base.
// router.get('/', api_controller.api);
// /// toy ROUTES ///
// // POST request for creating a toy.
// router.post('/toys', toy_controller.toy_create_post);
// // DELETE request to delete toy.
// router.delete('/toys/:id', toy_controller.toy_delete);
// // PUT request to update toy.
// router.put('/toys/:id', toy_controller.toy_update_put);
// // GET request for one toy.
// router.get('/toys/:id', toy_controller.toy_detail);
// // GET request for list of all toy items.
// router.get('/toys', toy_controller.toy_list);
// module.exports = router;

var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var toy_controller = require('../controllers/toys');

router.get('/', api_controller.api);

router.post('/toys', toy_controller.toy_create_post);

router.delete('/toys/:id', toy_controller.toy_delete);

router.put('/toys/:id', toy_controller.toy_update_put);

router.get('/toys/:id', toy_controller.toy_detail);

router.get('/toys', toy_controller.toy_list);

module.exports = router;
