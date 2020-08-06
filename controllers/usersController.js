const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const userFavoritesModel = require('../models').userFavorites;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  UserModel.findByPk(req.params.id, {
    include: [{model: HousesModel }, { model: CharactersModel }],
    }).then((userProfile) => {
      HousesModel.findAll().then((allHouses) => {
        console.log(userProfile);
      
    res.render("users/profile.ejs", {
      user: userProfile,
      houses: allHouses,
      })
    });
  });
});

//create route to add entry to user profile favorites
router.post('/addtofavorites', (req, res) => {
  req.body.userId = req.user.id;
  userFavoritesModel.create(req.body).then((newFavorite)=>{
    res.redirect(`/users/profile/${req.user.id}`)
  });
})

module.exports = router;
