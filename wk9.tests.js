/* Week 9 Front End Dev
    Author: Bob Ruzga
    Date: June 24, 2024
    Testing js file

    Installed an older version of Mocha and Chai
    see package.json
    */

const expect = chai.expect
const assert = chai.assert

describe('onePlayer', function() {
    it('#Should create a new palyer', function(){
        let p = new onePlayer("Bob");
        expect(p.name).to.equal('Bob');
    })
})

describe('getACardValue', function() {
    it('#Should return the value of a players hand card value', function(){
        let a = new Acard('Hearts', 9);
        expect(a.cardValue).to.equal(9);
    })
})