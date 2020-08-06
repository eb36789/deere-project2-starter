const express = require('express');
const router = express.Router();
const HousesModel = require('../models').houses;
const CharactersModel = require('../models').characters;

//show all route (index)
router.get('/', (req, res) => {
  HousesModel.findAll().then((allHousesFromDB) => {
  res.render('houses/index.ejs', {
      houses: allHousesFromDB
    });
  });
});

//show one route (index)
  router.get('/:id', (req, res) => {
    HousesModel.findByPk(req.params.id, {
      include: [{model: CharactersModel}]
    }).then(singleHouse=> {
      res.send(singleHouse)
  //   res.render('houses/show.ejs',{
  //     house: singleHouse 
  // });
});
});

module.exports = router;

