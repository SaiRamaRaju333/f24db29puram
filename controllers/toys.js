// // var Toy = require('../models/toys');
// // // List of all Costumes
// // // exports.toy_list = function(req, res) {
// // // res.send('NOT IMPLEMENTED: Toy list');
// // // };
// // // List of all Costumes
// // exports.toy_list = async function(req, res) {
// //     try{
// //     theToy = await Toy.find();
// //     res.send(theToy);
// //     }
// //     catch(err){
// //     res.status(500);
// //     res.send(`{"error": ${err}}`);
// //     }
// //     };
   
// // // for a specific Costume.
// // exports.toy_detail = function(req, res) {
// // res.send('NOT IMPLEMENTED: Toy detail: ' + req.params.id);
// // };
// // // Handle Costume create on POST.
// // exports.toy_create_post = function(req, res) {
// // res.send('NOT IMPLEMENTED: Toy create POST');
// // };
// // // Handle Costume delete from on DELETE.
// // exports.toy_delete = function(req, res) {
// // res.send('NOT IMPLEMENTED: Toy delete DELETE ' + req.params.id);
// // };
// // // Handle Costume update form on PUT.
// // exports.toy_update_put = function(req, res) {
// // res.send('NOT IMPLEMENTED: Toy update PUT' + req.params.id);
// // };

// const Toy = require('../models/toys');

// exports.toy_list = async function(req, res) {
//   try {
//       const toys = await Toy.find();
//       res.render('toys', { results: toys });
//   } catch (err) {
//       res.status(500).send(`Error: ${err}`);
//   }
// };

// //create one
// exports.toy_create_post = async function(req, res) {
//     let document = new Toy();
//     document.name = req.body.name;
//     document.type = req.body.type;
//     document.price_range = req.body.price_range;
//     try {
//         let result = await document.save();
//         res.send(result);
//     } catch (err) {
//         res.status(500);
//         res.send(`{"error": ${err}}`);
//     }
// };
  
// // exports.toy_detail = function(req, res) {
// //   res.send('NOT IMPLEMENTED: Toy detail: ' + req.params.id);
// // };

// //read one
// exports.toy_detail = async function(req, res) {
//     console.log("detail" + req.params.id);
//     try {
//         let result = await Toy.findById(req.params.id);
//         res.send(result);
//     } catch (error) {
//         res.status(500);
//         res.send(`{"error": document for id ${req.params.id} not found`);
//     }
//   };
  

// // exports.toy_create_post = async function(req, res) {
// //   let document = new Toy();
// //   document.name = req.body.name;
// //   document.type = req.body.type;
// //   document.price_range = req.body.price_range;
// //   try {
// //     let result = await document.save();
// //     res.send(result);
// //   } catch (err) {
// //     res.status(500);
// //     res.send(`{"error": ${err}}`);
// //   }
// // };

// exports.toy_update_get = async function(req, res) {
//     try {
//         const toy = await Toy.findById(req.params.id);
//         if (!toy) {
//             res.status(404).send('Toy not found');
//             return;
//         }
//         res.render('toy_update', { toy });
//     } catch (err) {
//         res.status(500).send(`Error: ${err}`);
//     }
//   };

// //   router.post('/', toy_controller.toy_create_post);

  
// //delete one
// exports.toy_delete = async function(req, res) {
//     try {
//         const result = await Toy.findByIdAndDelete(req.params.id);
//         if (!result) {
//             res.status(404).send('Toy not found');
//             return;
//         }
//         res.send(`Toy with id ${req.params.id} was deleted.`);
//     } catch (err) {
//         res.status(500).send(`Error: ${err}`);
//     }
//   };
  
  
// // exports.toy_delete = function(req, res) {
// //   res.send('NOT IMPLEMENTED: Toy delete DELETE ' + req.params.id);
// // };

// exports.toy_update_put = function(req, res) {
//   res.send('NOT IMPLEMENTED: Toy update PUT ' + req.params.id);
// };

const Toy = require('../models/toys');

//Get all Read
exports.toy_list = async function (req, res) {
    try {
        const toys = await Toy.find();
        res.render('toys', { results: toys });
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
};

//create one
exports.toy_create_post = async function (req, res) {
    let document = new Toy();
    document.name = req.body.name;
    document.price_range = req.body.price_range;
    document.type = req.body.type;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.toy_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Toy delete DELETE ' + req.params.id);
};

//put one update
// Toy controller (controllers/toys.js)
exports.toy_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await Toy.findById(req.params.id);
        // Update properties
        if (req.body.name) toUpdate.name = req.body.name;
        if (req.body.type) toUpdate.type = req.body.type;
        if (req.body.price_range) toUpdate.price_range = req.body.price_range;
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

//read one
exports.toy_detail = async function (req, res) {
    console.log("detail" + req.params.id);
    try {
        let result = await Toy.findById(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//delete one
exports.toy_delete = async function (req, res) {
    console.log("delete " + req.params.id);
    try {
        const result = await Toy.findByIdAndDelete(req.params.id);
        console.log("Removed " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": Error deleting ${err}}`);
    }
};

//single view
exports.toy_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id);
    try {
        result = await Toy.findById(req.query.id);
        res.render('toysdetail',
            { title: 'Toy Detail', toShow: result });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};

exports.toy_create_Page = function (req, res) {
    console.log("create view");
    try {
        res.render('toyscreate', { title: 'Toy Create' });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
}

exports.toy_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Toy.findById(req.query.id)
        res.render('toysupdate', { title: 'Toys Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.toy_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Toy.findById(req.query.id)
        res.render('toysdelete', {
            title: 'Toys Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};