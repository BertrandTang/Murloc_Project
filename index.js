const express = require("express");
// We have created an instance of express, which has been imported right above,  and assigned it to the variable app
const app = express();
// We imported the path module that we use below to set the path to our public folder 
const path = require('path');
const port = 3000;
// We imported our router to make it available here to use
const router = require('./app/router');

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the path to the folder view 
app.set('views', 'app/views/pages');

// express.static is a middleware that serves static files
// path.join is a method that makes sure the path will adapt to different OS's paths
// __dirname is a global variable in Node.js that represents the repository where the files is executed (here, __dirname = root of our folder Murloc_Project)
// Then the argument 'public' is the name of our folder with our static files. 
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(port, () => {
    console.log(`Teleporting to http://localhost:${port}`);
});
