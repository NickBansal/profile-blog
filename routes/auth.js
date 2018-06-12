var express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    middleware = require("../middleware"),
    User = require("../models/user");
    


// ROOT ROUTE
router.get("/", function(req, res){
    res.render("enter");
});



// REGISTER ROUTE
router.get("/register", function(req, res){
    res.render("register");
});



router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if (err){
            console.log(err);
            return res.render("register")
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/blogs")
        });
    });
});



// LOGIN ROUTE
router.get("/login", function(req, res){
    res.render("login");
});

router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/blogs",
        failureRedirect: "/login",
    }), function(req, res){
       req.flash("logged", "You are now logged in!") 
});



//LOG OUT ROUTE
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "You are now logged out!")
    res.redirect("back")
})




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};



module.exports = router;