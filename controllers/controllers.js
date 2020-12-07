const tagCheckerService = require('./../services/tagchecker');

const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from the server!'
    });
};

const tagChecker = (req, res, next) => {
    var result = tagCheckerService.tagChecker(req.body)
    res.status(200).json({
        body: result
    });
};

module.exports.saySomething = saySomething;
module.exports.tagChecker = tagChecker;