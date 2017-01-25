<<<<<<< HEAD
var chai = require('chai');
var expect = chai.expect;
var jsonDiff = require('./jsondiff');
var totalObjectKeys = require('./totalObjectKeys');
var wellFormed = require("./wellFormed");
var csvToJson = require('../js/chicago/crimedata');
var expectedLineJSON = require('../expecteddata/linejson.json');
var actualLineJSON = require('../outputdata/linejson.json');
var expectedBarJSON = require('../expecteddata/barjson.json');
var actualBarJSON = require('../outputdata/barjson.json');

describe('Run series of test for converter', function(){
  it("should not result in error", function(done){
     //expect(csvToJson).to.not.throw(Error);       
     done();
   });

  it('should fail if year is notprovided', function(){
       expect(csvToJson).to.throw(Error, "Not a number");
   });

  it('should fail if year is not a number', function(){
       expect(csvToJson.bind(undefined, {})).to.throw(Error, "Not a number");
   });

  it('should fail if year is NaN', function(){
       expect(csvToJson.bind(undefined, NaN)).to.throw(Error, "Not a number");
   });

  it('should not fail if the year is a literal number', function(){
       expect(csvToJson.bind(undefined, 1960)).to.not.throw(Error, "Not a number");
   });

  it('should not fail if the year is a Number object', function(){
       expect(csvToJson.bind(undefined, Number(1960))).to.not.throw(Error, "Not a number");
   });

})


describe('Test Application as Blackbox', function(){
  it ('Test Line JSON is well formed', function(done){
    var x = wellFormed(actualLineJSON);
    expect(x).to.be.equal(true);
    done();
  });
  it ('Test Bar JSON is well formed', function(done){
    var x = wellFormed(actualBarJSON);
    expect(x).to.be.equal(true);
    done();
  });
  it('Line JSON has expected Number of Objects', function(done){
    var objMatrix = totalObjectKeys.traverse(actualLineJSON);
    expect(objMatrix.totalNoObjects).to.not.equal(0);
    expect(objMatrix.totalNoKeys).to.not.equal(0);
    done();
  });
  it('Bar JSON has expected Number of Objects', function(done){
    var objMatrix = totalObjectKeys.traverse(actualBarJSON);
    expect(objMatrix.totalNoObjects).to.not.equal(0);
    expect(objMatrix.totalNoKeys).to.not.equal(0);
    done();
  });
  it('Test of Line JSON is as expected', function(done){
    var compareResult = jsonDiff.compareJSONObjects(expectedLineJSON, actualLineJSON);
    expect(compareResult.diffs).equal(0);
    done();
  });
  it('Test of Bar JSON is as expected', function(done){
    var compareResult = jsonDiff.compareJSONObjects(expectedBarJSON, actualBarJSON);
    expect(compareResult.diffs).equal(0);
    done();
  });
=======
var chai = require('chai');
var expect = chai.expect;
var jsonDiff = require('./jsondiff');
var totalObjectKeys = require('./totalObjectKeys');
var wellFormed = require("./wellFormed");
var csvToJson = require('../js/chicago/crimedata');
var expectedLineJSON = require('../expecteddata/linejson.json');
var actualLineJSON = require('../outputdata/linejson.json');
var expectedBarJSON = require('../expecteddata/barjson.json');
var actualBarJSON = require('../outputdata/barjson.json');

describe('Run series of test for converter', function(){
  it("should not result in error", function(done){
     //expect(csvToJson).to.not.throw(Error);       
     done();
   });

  it('should fail if year is notprovided', function(){
       expect(csvToJson).to.throw(Error, "Not a number");
   });

  it('should fail if year is not a number', function(){
       expect(csvToJson.bind(undefined, {})).to.throw(Error, "Not a number");
   });

  it('should fail if year is NaN', function(){
       expect(csvToJson.bind(undefined, NaN)).to.throw(Error, "Not a number");
   });

  it('should not fail if the year is a literal number', function(){
       expect(csvToJson.bind(undefined, 1960)).to.not.throw(Error, "Not a number");
   });

  it('should not fail if the year is a Number object', function(){
       expect(csvToJson.bind(undefined, Number(1960))).to.not.throw(Error, "Not a number");
   });

})


describe('Test Application as Blackbox', function(){
  it ('Test Line JSON is well formed', function(done){
    var x = wellFormed(actualLineJSON);
    expect(x).to.be.equal(true);
    done();
  });
  it ('Test Bar JSON is well formed', function(done){
    var x = wellFormed(actualBarJSON);
    expect(x).to.be.equal(true);
    done();
  });
  it('Line JSON has expected Number of Objects', function(done){
    var objMatrix = totalObjectKeys.traverse(actualLineJSON);
    expect(objMatrix.totalNoObjects).to.not.equal(0);
    expect(objMatrix.totalNoKeys).to.not.equal(0);
    done();
  });
  it('Bar JSON has expected Number of Objects', function(done){
    var objMatrix = totalObjectKeys.traverse(actualBarJSON);
    expect(objMatrix.totalNoObjects).to.not.equal(0);
    expect(objMatrix.totalNoKeys).to.not.equal(0);
    done();
  });
  it('Test of Line JSON is as expected', function(done){
    var compareResult = jsonDiff.compareJSONObjects(expectedLineJSON, actualLineJSON);
    expect(compareResult.diffs).equal(0);
    done();
  });
  it('Test of Bar JSON is as expected', function(done){
    var compareResult = jsonDiff.compareJSONObjects(expectedBarJSON, actualBarJSON);
    expect(compareResult.diffs).equal(0);
    done();
  });
>>>>>>> 6b1aca1d3e35b6965ab4253b2b236d984f4b2143
})