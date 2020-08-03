const express = require('express');
const router = express.Router();
const HousesModel = require("../models").Houses;

//index route
router.get('/', (req, res) => {
  HousesModel.findAll().then((allHousesFromDB) => {
  res.render("index.ejs", {
      houses: allHousesFromDB
    });
  });
});

  //new route - i don't think this is needed because they won't add a new house
//   router.get('/new', (req, res) => {
//     res.render('new.ejs');
// });

//show route
  router.get('/:id', (req, res) => {
    HousesModel.findByPk(req.params.id).then(singleHouse=> {
    res.render('show.ejs',{
      house: singleHouse, 
  });
});
});

// router.post('/', (req, res) => {
//     HousesModel.create(req.body).then((newHouse) =>{
//       res.redirect('/houses')
//     });
// });

// // router.get('/:individualHouse', (req, res) => {
// //     console.log(req.params);
// //     res.send(house[req.params.individualHouse]);
// // });

// router.get('/:id/edit', (req, res) => {
//   HousesModel.findByPk(req.params.id).then((houseToEdit) => {
//     res.render('edit.ejs',{house: houseToEdit,
// 		});
// });
// });

// router.put('/:id', (req, res) => { 
//   HousesModel.update(req.body, {where: {id: req.params.id}}).then((updatedHouse) =>
//   {res.redirect('/house');
//   }) 
// });

// router.delete('/:id', (req, res) => {
// 	 HousesModel.destroy({where: { id:req.params.id}}).then(() => {
//     res.redirect('/house');
//    });
// });

module.exports = router;

