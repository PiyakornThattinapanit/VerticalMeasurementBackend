

function isLoggedIn(req,res,next) {
    console.log("Authenticating...")
    if (!req.isAuthenticated()){
        return res.status(401).json({'message': 'not logged-in'})
    }
    else {
        console.log(req.body);
        return next()
    }
}

function getUserTester(req,res,next) {
    if (!req.isAuthenticated()){
        return res.status(401).json({'message': 'not-logged-in'})
    }
    else {
        console.log("//middleware UserTester path...")
        return next();
    }
}

module.exports.isLoggedIn = {isLoggedIn,getUserTester};
