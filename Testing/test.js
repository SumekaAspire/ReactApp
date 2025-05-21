

// test/test.js
import { expect } from 'chai';
import { add, sub } from '../app.js'; // Use ES module syntax for importing

// BDD - by default mocha supports BDD
describe('example1', () => {
    it('add(2,3) should return 5', () => {
        expect(add(2,3)).to.be.equal(5);
    });

    it('sub(5,3) should return 2', () => {
        expect(sub(5,3)).to.be.equal(2);
    });
});