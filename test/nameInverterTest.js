const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a single name when passed a single name', function() {
    const inputName = "Sophie";
    const expectedOutput = "Sophie";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a single name when passed a single name with extra spaces', function() {
    const inputName = "  Sophie  ";
    const expectedOutput = "Sophie";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return return a last-name, first-name when passed a first and last-name', function() {
    const inputName = "Sophie Dubois";
    const expectedOutput = "Dubois, Sophie";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a last-name, first-name when passed a first and last-name with extra spaces around the names', function() {
    const inputName = "  Sophie  Dubois  ";
    const expectedOutput = "Dubois, Sophie";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return an empty string when passed a single honorific', function() {
    const inputName = "Dr.";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return honorific first-name when passed honorific first-name', function() {
    const inputName = "Dr. Sophie";
    const expectedOutput = "Dr. Sophie";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a honorific last-name, first-name when passed honorific first-name last-name', function() {
    const inputName = "Dr. Sophie Dubois";
    const expectedOutput = "Dr. Dubois, Sophie";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  // Stretch honorific first name last name with extra spaces
  it('return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function() {
    const inputName = "  Dr.  Sophie Dubois  ";
    const expectedOutput = "Dr. Dubois, Sophie";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return undefined when name is undefined', function() {
    const inputName = undefined;
    const expectedOutput = 'Error: Parameter undefined.';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});