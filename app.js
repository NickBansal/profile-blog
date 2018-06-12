var expressSanitizer    = require("express-sanitizer"),
    methodOverride      = require("method-override"),
    flash               = require("connect-flash"),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    express             = require("express"),
    seedDB              = require("./seeds"),
    moment              = require("moment"),
    $                   = require('jquery'),
    app                 = express(),
    
    Picture             = require("./models/picture"),
    Blog                = require("./models/blog"),
    User                = require("./models/user"),
    
    passport            = require("passport"),
    LocalStrategy       = require("passport-local");

    
// DIFFERENT ROUTE PAGES
var blogRoutes          = require("./routes/blogs"),
    pictureRoutes       = require("./routes/pictures"),
    authRoutes          = require("./routes/auth"),
    portfolioRoutes     = require("./routes/portfolio");


// APP CONFIG    

var url = process.env.DATABASEURL || "mongodb://localhost/blog_app2";
mongoose.connect(url);


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(flash());
app.use(methodOverride("_method"));
// seedDB();

app.locals.moment   = require('moment');
app.locals.$        = require("jquery");

// PASSPORT CONFIG
app.use(require("express-session")({
    secret:             "This is a secret man",
    resave:             false,
    saveUninitialized:  false,
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// PASS CURRENT-USER TO ALL ROUTES
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    res.locals.added = req.flash("added");
    next();
});


// ROUTE CONFIG
app.use(blogRoutes);
app.use(pictureRoutes);
app.use(authRoutes);
app.use(portfolioRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running")
});




