const should = require("chai").should(),
expect = require("expect");
calculateSum = require("../js/array/sum");

describe("Calculate the sum from array and return as map", function(err){
  
    it("should be a map", function(done){
    	var result=calculateSum([[1,2,3,4],[9,8,7,6]]);
      expect(result).toBeA("object");
      expect(result[1]).toBe(10);
      done();     
    });

    it("sum key should match array index+1", function(done){
      var result=calculateSum([[1,2,3,4],[9,8,7,6]]);
      expect(result[1]).toBe(10);
      expect(result[2]).toBe(30);
      done();     
    });

  });
