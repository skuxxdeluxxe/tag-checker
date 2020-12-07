const tagCheckerService = require('./../services/tagchecker');

const tagChecker = (req, res, next) => {
    var result = tagCheckerService.tagChecker(req.body.paragraph)
    var statusCode = result.result ? 200 : 400
    res.status(statusCode).json({
        body: result.message
    });
};

module.exports.tagChecker = tagChecker;