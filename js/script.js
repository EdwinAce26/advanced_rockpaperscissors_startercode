//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
$( document ).ready(function() {
        
        var rock = "rock";
        var paper = "paper";
        var scissors = "scissors";
        var myChoice = $("#input").val();
      
        
        
        //FUNCTIONS
        
        
        
        $("#submit").click(function() {
        
        var computerChoice = Math.random();
        
        if (computerChoice <= 0.34){
                
                computerChoice = rock;
        }
        else if(computerChoice <= 0.67){
                        
                computerChoice = paper;
        }
        else{
                computerChoice = scissors;
        }
         console.log(computerChoice);
        
        
        if(myChoice === computerChoice){
                console.log("The results are tied");
                $("#response").text("The results are tied")
        }
        
        if (myChoice === rock && computerChoice === scissors){
                console.log("You Win");
                $("#response").text("You Win")
        }
        else{
                console.log("Computer Wins");
                $("#response").text("Computer Wins")
        }
        
        if (myChoice === scissors && computerChoice === paper){
                console.log("You Win");
                $("#response").text("You Win")
        }
        else{
                console.log("Computer Wins");
                $("#response").text("Computer Wins")
        }
        
        if (myChoice === paper && computerChoice === rock){
                console.log("You Win");
                $("#response").text("You Win")
        }
        else{
                console.log("Computer Wins");
                $("#response").text("Computer Wins")
        }
            
        });
// DOCUMENT READY FUNCTION
// $("button").click(function(){
    
//     var inputUsername= $("#username").val();
//     var inputPassword= $("#password").val();
    
//     
// });  
});