const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const todo_controller = require('../controllers/todo.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', todo_controller.test);
module.exports = router;