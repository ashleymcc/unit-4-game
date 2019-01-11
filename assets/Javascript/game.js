  // blue gem = cryblue
	// green gem = crygreen
	// purple gem =  crypurple
	// yellow gem = cryyellow

$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  // Selects a random number for game begin
  // Number should be should be between 19 - 120
  //
  $('#randomNumber').text(Random);
  // Append random number to the randomNumber ID in the html
  //
  var cryblue= Math.floor(Math.random()*11+1)
  var crygreen= Math.floor(Math.random()*11+1)
  var crypurple= Math.floor(Math.random()*11+1)
  var cryyellow= Math.floor(Math.random()*11+1)
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  // 
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  //  Decaring variables for tallies
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      cryblue= Math.floor(Math.random()*11+1);
      crygreen= Math.floor(Math.random()*11+1);
      crypurple= Math.floor(Math.random()*11+1);
      cryyellow= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
//adds the wins to the userTotal
function yay(){
alert("You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
//addes the losses to the userTotal
function loser(){
alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}
//click functions for crystals
  $('#one').on ('click', function(){
    userTotal = userTotal + cryblue;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + crygreen;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + crypurple;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//sets win/lose conditions
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + cryyellow;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 