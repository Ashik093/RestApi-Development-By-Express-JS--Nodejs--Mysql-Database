var jwt = require('jsonwebtoken');
exports.auth = function(req, res, next) {
    try {
        var decoded = jwt.verify(req.headers.authorization, process.env.SECRETE_KEY);
        auth_id = decoded.user_id
        next();
    } catch (err) {
        res.json({
            status: 401,
            message: "Unauthenticated"
        })
    }
}