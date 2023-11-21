

function isLoggedIn(req,res,next) {
    console.log(req)
    if (!req.isAuthenticated()){
        return res.status(401).json({'message': 'not logged-in'})
    }
    else {
        return next()
    }
}

function getUserTester(req,res,next) {
    console.log(req)
    if (!req.isAuthenticated()){
        return res.status(401).json({'message': 'not-logged-in'})
    }
    else {
        next();
        return res.json(req.usertester);
    }
}

module.exports.isLoggedIn = {isLoggedIn,getUserTester};
