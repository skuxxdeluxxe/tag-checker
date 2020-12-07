const openTagRegex = /<[A-Z]>/g;
const anyTagRegex = /<[A-Z]>|<\/[A-Z]>/g;

const tagChecker = (body) => {
    var paragraph = body.paragraph;
    var tagMatches = paragraph.match(anyTagRegex);
    console.log(tagMatches);

    var stack = [];
    for (let i = 0; i < tagMatches.length; i++) {
        tagFound = tagMatches[i];
        if (tagFound.match(openTagRegex)) {
            stack.push(tagFound);
        } else {
            recentOpenTag = stack.pop();

            if (recentOpenTag === undefined) {
                return `Expected # but found ${tagFound}`;
            }

            if (recentOpenTag.charAt(1) != tagFound.charAt(2)) {
                return `Expected </${recentOpenTag.charAt(1)}> but found ${tagFound}`;
            }
        }
    };

    if (stack.length != 0) {
        recentOpenTag = stack.pop();
        return `Expected </${recentOpenTag.charAt(1)}> but found #`;
    }

    return 'Correctly tagged paragraph'
};

module.exports.tagChecker = tagChecker;