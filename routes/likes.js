const express = require('express');


const router = express.Router();
const likesController = require('../controllers/likes_cantroller');

router.post('/toggle', likesController.toggleLike);



module.exports = router;