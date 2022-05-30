
var num_to_guess = prompt("hey, pls enter a number"); 

var user_guess = prompt(" guess the hidden number"); 



if (user_guess==num_to_guess){
	alert("correct"); 
	
} 

else if(user_guess>num_to_guess) {
	
alert("incorrect, the hidden number is smaller"); 
} 

else if (user_guess<num_to_guess){
	
	alert("incorrect, the hidden number is larger"); 
} 

	