// var Toy = require('../models/toys');
// // List of all Costumes
// // exports.toy_list = function(req, res) {
// // res.send('NOT IMPLEMENTED: Toy list');
// // };
// // List of all Costumes
// exports.toy_list = async function(req, res) {
//     try{
//     theToy = await Toy.find();
//     res.send(theToy);
//     }
//     catch(err){
//     res.status(500);
//     res.send(`{"error": ${err}}`);
//     }
//     };
   
// // for a specific Costume.
// exports.toy_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: Toy detail: ' + req.params.id);
// };
// // Handle Costume create on POST.
// exports.toy_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: Toy create POST');
// };
// // Handle Costume delete from on DELETE.
// exports.toy_delete = function(req, res) {
// res.send('NOT IMPLEMENTED: Toy delete DELETE ' + req.params.id);
// };
// // Handle Costume update form on PUT.
// exports.toy_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: Toy update PUT' + req.params.id);
// };

const Toy = require('../models/toys');

exports.toy_list = async function(req, res) {
  try {
      const toys = await Toy.find();
      res.render('toys', { results: toys });
  } catch (err) {
      res.status(500).send(`Error: ${err}`);
  }
};
  
exports.toy_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Toy detail: ' + req.params.id);
};

exports.toy_create_post = async function(req, res) {
  let document = new Toy();
  document.name = req.body.name;
  document.type = req.body.type;
  document.price_range = req.body.price_range;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};


exports.toy_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Toy delete DELETE ' + req.params.id);
};

exports.toy_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Toy update PUT ' + req.params.id);
};