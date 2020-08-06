const express = require("express");
const router = express.Router();

const housesModel = require("../models").houses;
const user = require("../models").User;
const userFavoritesModel = require('../models').userFavorites;
const charactersModel = require("../models").characters;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  user.findByPk(req.params.id).then((userProfile) => {
      housesModel.findAll().then((allHouses) => {
        userFavoritesModel.findAll().then((allFavorites) => {
        console.log(userProfile);
      
    res.render("users/profile.ejs", {
      user: userProfile,
      houses: allHouses,
      favorites: allFavorites})
      })
    });
  });
});

//user profile edit route
router.put('/profile/:id', (req, res) => {
  user.update(req.body, {
      where: {id: req.params.id}}).then((updatedUser) => {
        res.redirect(`/users/profile/${req.params.id}`);
});
});

//create route to add entry to user profile favorites
router.post('/addtofavorites', (req, res) => {
  req.body.userId = req.user.id;
  userFavoritesModel.create(req.body).then((newFavorite)=>{
    res.redirect(`/users/profile/${req.user.id}`)
  });
})

router.delete('/profile/:id', (req, res) => {
  userFavoritesModel.destroy({where: { id:req.params.id}}).then(() => {
   res.redirect(`/users/profile/${req.user.id}`);
  });
});

//delete user route
router.delete("/profile/:id", (req, res) => {
  user.destroy({where: { id:req.params.id}}).then(() => {
    console.log(res.send);
  res.redirect("/");
});
});



module.exports = router;
