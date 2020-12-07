const expect = require('chai').expect
const tagCheckerService = require('./../../services/tagchecker');

describe('Tag Checker', () => {
    describe('When entering a string with no tags', () => {
        const result = tagCheckerService.tagChecker("any normal sentence");
        it('should return a result that is true', () => {
            expect(result.result).to.be.true;
        });

        it('should return a message that is "Correctly tagged paragraph"', () => {
            expect(result.message).to.equal('Correctly tagged paragraph');
        });
    })

    describe('When entering a string with completed tags', () => {
        const result = tagCheckerService.tagChecker("<B>This <\g>is <B>boldface</B> in <<*> a</B> <\6> <<d>sentence");
        it('should return a result that is true', () => {
            expect(result.result).to.be.true;
        });

        it('should return a message that is "Correctly tagged paragraph"', () => {
            expect(result.message).to.equal('Correctly tagged paragraph');
        });
    })

    describe('When entering a string with extra opening tags', () => {
        const result = tagCheckerService.tagChecker("<B><C>This should be centred and in boldface, but there is a missing closing tag</C>");
        it('should return a result that is false', () => {
            expect(result.result).to.be.false;
        });

        it('should return a message that indicates what tag was expected', () => {
            expect(result.message).to.equal('Expected </B> but found #');
        });
    })

    describe('When entering a string with extra closing tags', () => {
        const result = tagCheckerService.tagChecker("<B>This should be in boldface, but there is an extra closing tag</B></C>");
        it('should return a result that is false', () => {
            expect(result.result).to.be.false;
        });

        it('should return a message that indicates what tag was expected', () => {
            expect(result.message).to.equal('Expected # but found </C>');
        });
    })

    describe('When entering a string with incorrectly nested tags', () => {
        const result = tagCheckerService.tagChecker("<B><C>This should be centred and in boldface, but the tags are wrongly nested </B></C>");
        it('should return a result that is false', () => {
            expect(result.result).to.be.false;
        });

        it('should return a message that indicates what tag was expected', () => {
            expect(result.message).to.equal('Expected </C> but found </B>');
        });
    })

})