$(document).ready(function() {
    $("#shoot").click(function(){
    
        $("#userChoice").text($("input").val());

        let computer=Math.random();

        if (computer > 0 && computer < .33)  {
            $("#computerChoice").text("rock");
            
        } else if (computer  > .34  && computer < .66) {
            $("#computerChoice").text("paper");
            
        } else if ( computer > .67 && computer < .99) {
            $("#computerChoice").text("scissors");
        
        } 
        
        
        if ($("#userChoice").text() === "rock" && $("#computerChoice").text() === "scissors"){
                alert ("You win!");
                
        } else if ($("#userChoice").text() === "paper" && $("#computerChoice").text() === "rock"){
                alert ("You win!");
                
        } else if ($("#userChoice").text() === "scissors" && $("#computerChoice").text() === "paper"){
                alert ("You win!");
                
        } else if ($("#computerChoice").text() === "rock" && $("#userChoice").text()  === "scissors"){
                alert ("Sorry, you lose.");
                
        } else if ($("#computerChoice").text() === "paper" && $("#userChoice").text()  === "rock"){
                alert ("Sorry, you lose.");
                
        } else if ($("#computerChoice").text() === "scissors" && $("#userChoice").text() === "paper"){
                alert ("Sorry, you lose.");
                
        } else  if ( $("userChoice").attr("id") ===  $("#computerChoice").text()){
                alert ("Tie!");
        }
    });    
            

    });