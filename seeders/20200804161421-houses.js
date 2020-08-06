'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('houses', [
      {
     id: "5a05e2b252f721a3cf2ea33f",
      name: "Gryffindor",
      mascot: "lion",
      headOfHouse: "Minerva McGonagall",
      houseGhost: "Nearly Headless Nick",
      founder: "Goderic Gryffindor",
      school: "Hogwarts School of Witchcraft and Wizardry",
      
      values: [
      "courage",
      "bravery",
      "nerve",
      "chivalry"
      ],
      colors: [
      "scarlet",
      "gold"
      ]
      },
      {
     id: "5a05da69d45bd0a11bd5e06f",
      name: "Ravenclaw",
      mascot: "eagle",
      headOfHouse: "Fillius Flitwick",
      houseGhost: "The Grey Lady",
      founder: "Rowena Ravenclaw",
      school: "Hogwarts School of Witchcraft and Wizardry",
      values: [
      "intelligence",
      "creativity",
      "learning",
      "wit"
      ],
      colors: [
      "blue",
      " bronze"
      ]
      },
      {
    
     id: "5a05dc8cd45bd0a11bd5e071",
      name: "Slytherin",
      mascot: "serpent",
      headOfHouse: "Severus Snape",
      houseGhost: "The Bloody Baron",
      founder: "Salazar Slytherin",
      values: [
      "ambition",
      "cunning",
      "leadership",
      "resourcefulness"
      ],
      colors: [
      "green",
      "silver"
      ]
      },
      {
       id: "5a05dc58d45bd0a11bd5e070",
      name: "Hufflepuff",
      mascot: "badger",
      headOfHouse: "Pomona Sprout",
      houseGhost: "The Fat Friar",
      founder: "Helga Hufflepuff",
      school: "Hogwarts School of Witchcraft and Wizardry",
      values: [
      "hard work",
      "patience",
      "justice",
      "loyalty"
      ],
      colors: [
      "yellow",
      "black"
      ]
      },
      {
        id: "5a05dc58d45bd0a11bd5e07b",
       name: "no house",
       mascot: "n/a",
       headOfHouse: "n/a",
       houseGhost: "n/a",
       founder: "n/a",
       school: "n/a",
       values: [
       "n/a"
       ],
       colors: [
       "n/a"
       ]
       }
      ]
    
    , {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
