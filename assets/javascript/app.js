/* need logic to capture the answers and calculate correct and incorrect answers */

/* Create Correct answer array and Incorrect answer array

Unanswered is either an array or a response

Create var answerKey with the correct answers

Use the O5-Timers Activity #15 File Extension exercise to create the formula to calculate correct and incorrect answers*/
var correctAnswer1 =  $("#answer1").val();
var correctAnswer2 =  $("#answer2").val();
var correctAnswer3 =  $("#answer3").val();
var correctAnswer4 =  $("#answer4").val();
var correctAnswer5 =  $("#answer5").val();
var answerKey = [correctAnswer1,correctAnswer2,correctAnswer3,correctAnswer4,correctAnswer5]

function check()
{
    console.log("linked");
    $(".results").show();
    $(".quiz").hide(1500);
    //$(".results").css("visibility","visible");
    //$("#answer1").checked = true;
      console.log(answerKey);

var isChecked1 = $("#answer1").prop("checked");
        console.log(isChecked1);
    
//code to check the answerKey for correct/incorrect answers
var i;


    for (i = 0; i < answerKey.length; i++){
        console.log(answerKey[i]);
        
         //I want to compare what is submitted to the values in my array.  
        if (answerKey[i] === isChecked1){

           console.log("yay");

        }

        
    }



}
//begin to collect the answers and code it.  

//google "How to capture the value of radio buttons in a quiz"
