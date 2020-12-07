const openTagRegex = /<[A-Z]>/g;
const anyTagRegex = /<[A-Z]>|<\/[A-Z]>/g;

const tagChecker = (body) => {
    var paragraph = body.paragraph;
    var tagMatches = paragraph.match(anyTagRegex);

    if(tagMatches === null) {
        return { result: true, message: 'Correctly tagged paragraph' };
    }

    var stack = [];
    for (let i = 0; i < tagMatches.length; i++) {
        tagFound = tagMatches[i];
        if (tagFound.match(openTagRegex)) {
            stack.push(tagFound);
        } else {
            recentOpenTag = stack.pop();

            if (recentOpenTag === undefined) {
                return { result: false, message: `Expected # but found ${tagFound}` };
            }

            if (recentOpenTag.charAt(1) != tagFound.charAt(2)) {
                return { result: false, message: `Expected </${recentOpenTag.charAt(1)}> but found ${tagFound}` };
            }
        }
    };

    if (stack.length != 0) {
        recentOpenTag = stack.pop();
        return { result: false, message: `Expected </${recentOpenTag.charAt(1)}> but found #` };
    }

    return { result: true, message: 'Correctly tagged paragraph' };
};

module.exports.tagChecker = tagChecker;