var express = require("express"),
    router = express.Router(),
    Comment = require("../models/comments"),
    middleware = require("../middleware"),
    Blog = require("../models/blog");



// COMMENTS NEW
router.get("/blogs/:id/comments/new", middleware.isLoggedIn, function(req, res){
    Blog.findById(req.params.id, function(err, blog){
        if (err) {
            res.redirect("/blogs/:id/comments")
        } else {
            res.render("comments/new", {blog: blog});
        };
    });
});


// COMMENTS CREATE
router.post("/blogs/:id/comments", middleware.isLoggedIn, function(req, res){
    Blog.findById(req.params.id, function(err, blog){
        if (err) {
            res.redirect("/blogs");
        } else {
           Comment.create(req.body.comment, function(err, comment){
               if (err) {
                   console.log(err);
               } else {
                   blog.comments.push(comment);
                   blog.save();
                   res.redirect("/blogs/" + blog._id);
               }
           })
        };
    });
});


// DELETE COMMENT
router.delete("/blogs/:id/comments/:comment_id", function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
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