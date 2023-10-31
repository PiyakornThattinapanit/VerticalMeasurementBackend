

function isLoggedIn(req,res,next) {
    if (!req.isAuthenticated()){
        return res.status(401).json({'message': 'not logged-in'})
    }
    else {
        return next()
    }
}

module.exports.isLoggedIn = {isLoggedIn};
