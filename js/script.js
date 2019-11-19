// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
// DOCUMENT READY FUNCTION BELOW
$(document).ready(function() {
    $("#shoot").click(function(){
    
        $("#userChoice").text($("input").val());

        let computer=Math.random();

        console.log(computer);
        if (computer > 0 && computer < .33)  {
            $("#computerChoice").text("rock");
        } else if (computer  > .33  && computer < .66) {
            $("#computerChoice").text("paper");
        } else if ( computer > .66 && computer < .99) {
            $("#computerChoice").text("scissors");
        }
    })
});