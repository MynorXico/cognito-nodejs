var authService = require('../Services/AuthService');
const dotenv = require('dotenv');
dotenv.config();

exports.register = function(req, res){
    let register = authService.Register(req.body, function(err, result){
        if(err)
            res.send(err);
        res.send(result);
    })
}

exports.login = function(req, res){
    let login = authService.Login(req.body, function(err, result){
        if(err)
            res.send(err)
        res.cookie(process.env.COGNITO_COOKIE_NAME, result);
        res.send(result);
    })
}

exports.validate_token = function(req, res){
    let validate = authService.Validate(req.body.token, function(err, result){
        if(err){
            res.send(err.message);
        }
        res.send(result);
    });
}

exports.logout = function(req, res){
    res.clearCookie('cognito-jwt');
    res.send({});
}