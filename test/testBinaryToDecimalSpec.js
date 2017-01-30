var should = require("chai").should();
//expect=require("chai").expect
bintodec=require("../js/converters/sample");
describe("Convert binary to decimal", function(err){
      it("Should Convert binary to decimal", function(done){
      	   var result=bintodec('100');
           result.should.be.equal(4);
           done();
        });
        it("Should ", function(done){
        	   var result=bintodec('1101');
             result.should.be.equal(13);
             done();
          });
          it("Should ", function(done){
          	   var result=bintodec('110011');
               result.should.be.equal(51);
               done();
            });
            it("Should ", function(done){
            	   var result=bintodec('0');
                 result.should.be.equal(0);
                 done();
              });
        });
