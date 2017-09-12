var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.burger.findAll({}).then(function(data) {
            res.render("index", { burgers: data });
        });
     });
     app.post("/", function(req, res) {
        db.burger.findAll({}).then(function(data) {
            var dup = false;
            data.forEach(function(itm, idx, arr) {
                if(itm.burger_name.toLowerCase().trim() == req.body.name.toLowerCase().trim()){
                    dup = true;
                }
            });
            if(!dup) {
                var temp = req.body.name.toLowerCase().trim();
                temp = temp.replace(/\b[a-z]/g, function(str){
                    return str.toUpperCase();
                });
                db.burger.create({
                    burger_name: temp,
                }).then(function(data) {
                    res.redirect("/");
                });
            } else {
                db.burger.update({
                    devoured: false
                }, {
                    where: {
                        burger_name: req.body.name
                    }
                }).then(function(data) {
                    res.redirect("/");
                });
            }
        });
     });
     app.put("/:id", function(req, res) {
        db.burger.update({
            devoured: 1
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(data) {
            setTimeout(function() {
                res.redirect("/");
            }, 1800);
         });
     });
}