// Extensions are implemented as JavaScript classes
var LocalVariable = function() {

	this.title = function (context) {
		return "var";
	};

	this.text = function(context) { 
		return this.name + "(" + this.value + ")"; 
	};

  	// implement the evaluate() method to generate the dynamic value
  	this.evaluate = function(context) {
    	var localVariable = this.value; // generate some dynamic value

    	return localVariable;
	};
};
// set the Extension Identifier (must be same as the directory name)
LocalVariable.identifier = "kr.co.jjmean2.PawExtensions.LocalVariable";

// give a display name to your Dynamic Value
LocalVariable.title = "Local Variable";

// link to the Dynamic Value documentation
// LocalVariable.help = "https://luckymarmot.com/paw/doc/";

// set input fields
LocalVariable.inputs = [
	InputField("name", "Name", "String"),
	InputField("value", "Value", "String")
];

// call to register function is required
registerDynamicValueClass(LocalVariable);
