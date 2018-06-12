var mongoose = require("mongoose"),
    Blog = require("./models/blog"),
    Picture = require("./models/picture");
    
   
function seedDB(){
    // REMOVE ALL BLOG POSTS
    Blog.remove({}, function(err){
        if (err) {
            console.log(err);
        }
        console.log("Database is deleted!");
    });  
};

module.exports = seedDB;
