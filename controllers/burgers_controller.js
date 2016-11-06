
var express = require('express');
var router = express.Router();
//var bodyParser = require('body-parser');
//var app = express();
//var methodOverride = require('method-override');
//var burger = require('../models/burger.js');
var models = require('../models');

router.get('/', function (req, res) {
    models.burgers.findAll().then(function (burgers) {
        var hbsObject = { burgers: burgers};
        //console.log('\nhandlebars hbsObject\n', hbsObject);
        res.render('index', hbsObject);
    })
});

// router.get('/burgers', function(req,res) {
// 	//console.log("\nrouter.get burgers");
// 	burger.all(function(data){

// 		var hbsObject = { burgers: data };
// 		//console.log('\nhandlebars hbsObject\n', hbsObject);
// 		res.render('index', hbsObject);
// 	});
// });

// router.post('/burgers/create', function(req,res) {
// 	burger.create(['burger_name', 'devoured'], [req.body.burger_name, 0], function(){
// 		res.redirect('/burgers');
// 	});
// });

router.post('/create', function (req, res) {
    models.burgers.create({
        burger_name: req.body.burger_name,
        devouted: false
    })
    res.redirect('./');
})

// router.put('/burgers/update/:id', function(req,res) {
// 	var condition = 'id = ' + req.params.id;

// 	//console.log('condition', condition);

// 	burger.update({ 'devoured': 1}, condition, function(){
// 		res.redirect('/burgers');
// 	});
// });

router.put('/update', function (req, res) {
    //console.log(req.body.id);
    models.burgers.update(
        {
         devoured:true
        },
        {
            where:{id:req.body.devoured},
        }
        );
    res.redirect('./')
})
module.exports = router;

