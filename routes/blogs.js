var express = require("express"),
    router = express.Router(),
    Picture = require("../models/picture"),
    middleware = require("../middleware"),
    Blog = require("../models/blog");



// INDEX
router.get("/blogs", function(req, res){
    Blog.find({}, function(err, foundBlog){
        if (err) {
            console.log(err);
        } else {
            res.render("blog/index", {foundBlog: foundBlog});
        }
    });
});


// NICKY BLOG
router.get("/nickbansal", function(req, res){
    res.render("nickyblog/new");
});


// PORTFOLIO
router.get("/portfolio", function(req, res){
    res.render("portfolio/new");
});


// MUSIC
router.get("/music", function(req, res){
    res.render("music/new")
});



// NEW
router.get("/blogs/new", middleware.isLoggedIn, function(req, res){
    res.render("blog/new");
});



// CREATE
router.post("/blogs", middleware.isLoggedIn, function(req, res){
    Blog.create(req.body.blog, function(err, newBlog) {
        if (err) {
            res.redirect("/blogs")
        } else {
            req.flash("success", newBlog.title + " has just been added")
            res.redirect("/blogs")
        }
    });
});



// SHOW
router.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id).populate("picture").exec(function(err, showBlog){
        if (err) {
            res.redirect("/blogs")
        } else {
            // console.log(showBlog);
            res.render("blog/show", {blog: showBlog})
        }
    });
});



// EDIT
router.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, editBlog){
        if (err) {
            res.redirect("/blogs")
        } else {
            res.render("blog/edit", {editBlog: editBlog})
        }
    });
});



// UPDATE
router.put("/blogs/:id", function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});



// DELETE
router.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if (err) {
            res.redirect("/blogs/")
        } else {
            res.redirect("/blogs/")   
        }
    });
});


module.exports = router;