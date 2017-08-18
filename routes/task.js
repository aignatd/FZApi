var express = require('express');
var router = express.Router();
var taskctrl = require('./../controllers/taskctrl');

/* GET tasks listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* API for task listing */
router.post('/tasklist', taskctrl.postUserTask);

/* API for task choose (drop down) */
router.post('/taskinput', taskctrl.postUserTask);

/* API for task sync */
router.post('/tasksync', taskctrl.postSaveTask);

module.exports = router;
