// Run from terminal: node Car.js

//  Car Definition 
var car = {
	make	: "Citroen",
	model	: "DS",
	year	: 1975,
	canFly  : "true",
        altitude : 2000,
	isConvertible : "true",
	top : "up",
	redButton : "inactive",
	getName : function() {
		return this.year + " " + this.make + " " + this.model;
	},
	putTopDown : function() {
		if(this.altitude > 3000){
		this.top = "up";
		return "altitude too high";
	}
		else if(this.top=="up"){
		this.top = "down"
	}
                return this.top;
        },
	putTopUp : function() {
		if(this.top=="down"){
                this.top = "up"
                }
                return this.top;
        },
	pressRedButton : function() {
		this.redButton == "inactive" ? this.redButton = "active" : this.redButton = "inactive";  
	},
	canSwim : function(){
		return this.redButton == "inactive" ? "false" : "true";
	},
	start : function() {
		return this.year < 1985 ? "chugga chugga vroom vroom!" : "vroom vroom!";
	}
}

module.exports = car;
