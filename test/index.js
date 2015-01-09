var should = require('chai').should(), //-meli, -malı
	expect = require('chai').expect, //beklemek
    serkomut = require('../spliter'),
    index = serkomut.spliter;

describe("Split Test Fixture", function() {
	var result = index('zaman, hayat, falan', ',');
    it("Should Equal : ", function() {
        result[0].should.equal('zaman');
    });

    it("Should Have : ", function(){
    	result.should.have.length(3);
    });

    it('Expect To Be : ', function(){
    	expect(result).to.have.length(3);
    });

    it('Expect To Be : ', function(){
    	expect(result).to.have.length(3);
    });
});