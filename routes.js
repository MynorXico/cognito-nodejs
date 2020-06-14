var express = require('express');
var router = express.Router();

var authController = require('./Controllers/AuthController');
var authMiddleWare = require('./Middleware/AuthMiddleware');

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/validate', authController.validate_token);
router.post('/auth/logout', authController.logout);

router.get('/', (req, res) => {
    res.sendFile("D:\\cognito-nodejs\\public\\index.html");
});

router.get('/hello', authMiddleWare.Validate, (req, res) => {
    res.send("Allowed :D");
});

module.exports = router;