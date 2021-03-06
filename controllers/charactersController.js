const express = require('express');
const router = express.Router();
const CharactersModel = require('../models').characters;

//show all route (index)
router.get('/', (req, res) => {
  CharactersModel.findAll().then((allCharactersFromDB) => {
  res.render('characters/index.ejs', {
      characters: allCharactersFromDB
    });
  });
});

//show one route (index)
  router.get('/:id', (req, res) => {
    CharactersModel.findByPk(req.params.id).then(singleCharacter=> {
    res.render('characters/show.ejs',{
      character: singleCharacter, 
  });
});
});

router.put('/addurltocharacter/:id', (req, res) => {
  CharactersModel.update(req.body, {where: {id: req.params.id}}).then((updatedURL)=>
  {res.redirect(`/characters/${req.params.id}`)})
})


module.exports = router;