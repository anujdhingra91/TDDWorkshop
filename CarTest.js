var car = require("./Car.js"),
    assert = require('assert'),
    should = require('should');

describe('Car', function() { 
    var testCar = car;
    describe('when displaying the car\'s name', function() {
        it('should contain the make, model and year', function() {
            assert.equal(testCar.getName(), testCar.year + " " + testCar.make + " " + testCar.model);
        })
    })
    describe('when start a car built before 1985', function() {
        it('should give a chugga with a vroom', function() {
            testCar.year = 1970;
            should.equal(testCar.start(), "chugga chugga vroom vroom!");
        })
    })
    describe('when starting a car built after 1985', function() {
        it('should give a chugga with a vroom', function() {
            testCar.year = 1997;
            assert.equal(testCar.start(), "vroom vroom!");
        })
    })
    describe('when ensuring that a car can fly', function(){
	it('should have wings', function(){
	    should.exist(testCar.canFly);
	})
    })
    describe('when a car can fly, it should have the notion of altitude', function(){
        it('should have a notion of altitude', function(){
	    if(testCar.canFly){
            should.exist(testCar.altitude);
	}
        })
    })
    describe('when ensuring that a car can be a convertible', function(){
        it('should be able to have the top go down', function(){
            should.exist(testCar.isConvertible);
        })
    })
    describe('when ensuring that if a car is convertible, it can make the roof go down', function(){
        it('should return "up" or "down"', function(){
            assert.equal(testCar.putTopDown(),"down");
	    assert.equal(testCar.putTopUp(),"up");
        })
    })
    describe('when a car has altitude > 3000 feet', function(){
        it('should not be able to open top', function(){
	    testCar.altitude = 4000;
            if(testCar.altitude > 3000){
	    assert.equal(testCar.putTopDown(),"altitude too high");
	}
        })
    })
    describe('when pressed the red button', function(){
        it('should be able to move on water', function(){
	    testCar.pressRedButton();
            if(testCar.redButton == "active"){
	    testCar.canSwim().should.equal("true");
	}
	    else{
            testCar.canSwim().should.equal("false");
	}
	})
    })	
});
