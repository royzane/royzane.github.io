//--------- COMMENTS in JAVASCRIPT ----------//

/*
Everything in between is a comment.
*/

// This is a comment too.

//-------------------------------------------//


//-------------------------------------------------------- VARIABLE in JAVASCRIPT -----------------------------------------------------------------//

// JS Variable declaration type 1
let myVariable;
myVariable = "Bob";

// JS Variable declaration type 2
let myVariable2 = "Bob";

// Replace value myVariabe
myVariable2 = "Steve";

// Variable Data Type "String"
let variableString = "Bob"; //This is a sequence of text known as a string. To signify that the value is a string, enclose it in single quote marks.

// Variable Data Type "Number"
let variableNumber = 10; //Numbers don't have quotes around them.

// Variable Data Type "Boolean"
let variableBoolean = true; //This is a True/False value. The words true and false are special keywords that don't need quote marks.

// Variable Data Type "Array"
let variableArray = [1,'Bob','Steve',10]; //Refer to each member of the array like this: variableArray[0], variableArray[1], etc.

// Variable Data Type "Object"
let variableObject = document.querySelector('h1'); //This can be anything. Everything in JavaScript is an object, and can be stored in a variable

//---------------------------------------------------------------------------------------------------------------------------------------------------//


/********************************************************** OPERATOR IN JavaScript *********************************************************************************************

Operator				Explanation															Symbol(s)					Example

Addition				Add two numbers together or combine two strings.					+							6 + 9;  'Hello ' + 'world!';
						Subtraction, Multiplication, Division	
						These do what you'd expect them to do in basic math.				-, *, /						9 - 3; 8 * 2; // multiply in JS is an asterisk 9 / 3;
				
Assignment				As you've seen already: this assigns a value to a variable.			=							let myVariable = 'Bob';

Equality				This performs a test to see if two values are equal. 
						It returns a true/false (Boolean) result.							===							let myVariable = 3;
																														myVariable === 4;
																											
Not, Does-not-equal		This returns the logically opposite value of what it precedes. 
						It turns a true into a false, etc..
						When it is used alongside the Equality operator, 
						the negation operator tests whether two values are not equal.		!, !==	
																														For "Not", the basic expression is true, 
																														but the comparison returns false because we negate it:

																														let myVariable = 3;
																														!(myVariable === 3);

																														"Does-not-equal" gives basically the same result with 
																														different syntax. 
																														Here we are testing "is myVariable NOT equal to 3".
																														This returns false because myVariable IS equal to 3:

																														let myVariable = 3;
																														myVariable !== 3;


**********************************************************************************************************************************************************************************/