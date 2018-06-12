var express = require("express"),
    router = express.Router();



router.get("/portfolio/first_project", function(req, res){
    res.render("portfolio/first_project");    
});

router.get("/portfolio/color_game", function(req, res){
    res.render("portfolio/colorgame");    
});

router.get("/portfolio/weather_app", function(req, res){
    res.render("portfolio/weatherapp");    
});

router.get("/portfolio/wikipedia", function(req, res){
    res.render("portfolio/wikipedia");    
});

router.get("/portfolio/random_quote", function(req, res){
    res.render("portfolio/random_quote");    
});

router.get("/portfolio/todolist", function(req, res){
    res.render("portfolio/todolist");    
});

router.get("/portfolio/drumkit", function(req, res){
    res.render("portfolio/drumkit");    
});

router.get("/portfolio/clock", function(req, res){
    res.render("portfolio/clock");    
});

router.get("/portfolio/css-project", function(req, res){
    res.render("portfolio/css-project");    
});


module.exports = router;