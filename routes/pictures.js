var express = require("express"),
    router = express.Router(),
    Picture = require("../models/picture"),
    middleware = require("../middleware"),
    Blog = require("../models/blog");



// COMMENTS NEW
router.get("/blogs/:id/pictures/new", middleware.isLoggedIn, function(req, res){
    Blog.findById(req.params.id, function(err, blog){
        if (err) {
            res.redirect("/blogs/:id/")
        } else {
            res.render("pictures/new", {blog: blog});
        };
    });
});


// COMMENTS CREATE
router.post("/blogs/:id/pictures", middleware.isLoggedIn, function(req, res){
    Blog.findById(req.params.id, function(err, blog){
        if (err) {
            res.redirect("/blogs");
        } else {
           Picture.create(req.body.picture, function(err, comment){
               if (err) {
                   console.log(err);
               } else {
                   blog.picture.push(comment);
                   blog.save();
                   res.redirect("/blogs/" + blog._id);
               }
           })
        };
    });
});


// DELETE COMMENT
router.delete("/blogs/:id/pictures/:picture", function(req, res){
    Picture.findByIdAndRemove(req.params.comment_id, function(err){
        if (err) {
            res.redirect("back");
        } else {
            res.redirect("/blogs/" + req.params.id);
        };
    });
});



function isLoggedIn(req, res, next) {
    
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};

module.exports = router;