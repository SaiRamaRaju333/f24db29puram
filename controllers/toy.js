var Toy = require('../models/toy');
// List of all Costumes
// exports.toy_list = function(req, res) {
// res.send('NOT IMPLEMENTED: Toy list');
// };
// List of all Costumes
exports.toy_list = async function(req, res) {
    try{
    theToy = await Toy.find();
    res.send(theToy);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   
// for a specific Costume.
exports.toy_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Toy detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.toy_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Toy create POST');
};
// Handle Costume delete from on DELETE.
exports.toy_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Toy delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.toy_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Toy update PUT' + req.params.id);
};