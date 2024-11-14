var Toy = require('../models/toy');
// List of all toys
exports.toy_list = function(req, res) {
res.send('NOT IMPLEMENTED: Toy list');
};
// for a specific toy.
exports.toy_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Toy detail: ' + req.params.id);
};
// Handle toy create on POST.
exports.toy_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Toy create POST');
};
// Handle toy delete from on DELETE.
exports.toy_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Toy delete DELETE ' + req.params.id);
};
// Handle toy update form on PUT.
exports.toy_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Toy update PUT' + req.params.id);
};
