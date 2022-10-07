var express = require('express');
var router = express.Router();
// <!-- <header class="header">
//         <div class="container">
//                 <p class="text-muted">
//                 File Name: <a>index.js</a><br/>
//                 Student Name: <a>Hari Krishna Jetti</a><br/>
//                 Student Id: <a>j301241201</a><br/>
//                 Date: <a>07-October-2022</a><br/>
//                 </p>
//         </div>
//       </header> -->

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET About us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
module.exports = router;
