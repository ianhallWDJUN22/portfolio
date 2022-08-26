const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;

router.get('/project1', (req, res, next) => {
  res.render('projects/project1.hbs');
});

router.get('/project2', (req, res, next) => {
  res.render('projects/project2.hbs');
});

router.get('/project3', (req, res, next) => {
  res.render('projects/project3.hbs');
});


