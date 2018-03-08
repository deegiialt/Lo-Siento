  //user vote api routes
  var db = require("../models");

  // Routes
  // =============================================================
  module.exports = function(app) {

    app.get("/show", function(req, res) {
      //show all articles voted on
      db.Votes.findAll({
        where: {
          faux: req.body.faux,
          real: req.body.real,
          source: req.body.source,
          article: req.body.article,
          articleTitle: req.body.articleTitle
        }
      }).then(function(votes) {
        console.log(votes);
        res.json(votes);
      })
    });

    app.get("/show/:source/:article", function(req, res) {
      db.Votes.findOne({
        where: {
          source: req.params.source,
          articleTitle: req.params.articleTitle,
          article: req.body.article,
          faux: req.body.faux,
          real: req.body.real
        }
      }).then(function(votes) {
        console.log(votes);
        res.json(votes);
      })
    });

    app.post("/api/vote", function(req, res) {
    	db.Votes.create({
        where: {
          faux: req.body.faux,
          real: req.body.real,
          source: req.body.source,
          article: req.body.article,
          articleTitle: req.body.articleTitle
        }
      }).then(function(votes) {
    		console.log(votes);
    		res.json(votes); //for individual vote
    	});
    });

    app.put("/api/vote", function(req, res) {
      //to update the vote if need be
      db.Votes.update({
          where: {
            id: req.body.id
          }
        }).then(function(votes) {
        console.log(votes);
        res.json(votes)
      })
    })
  };