const tagCheckerService = require('./../services/tagchecker');

const tagChecker = (req, res, next) => {
    var result = tagCheckerService.tagChecker(req.body)
    res.status(200).json({
        body: result
    });
};

module.exports.tagChecker = tagChecker;