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
var totalCorrect = 0;
var totalIncorrect = 0;
var timer = 45;
var intervalId;

$(".submitbutton").on("click", stop);

function check()
{
    console.log("linked");
    stop();
    $(".results").show();
    $(".quiz").hide(1500);
    $(".submitbutton").hide(1000);
    $("#totalCorrect").text(totalCorrect);
    $("#totalIncorrect").text(totalIncorrect);
    //$(".results").css("visibility","visible");
    //$("#answer1").checked = true;
      //console.log(answerKey);


      //this code confirms if an answer was checked
      var checkedAnswer1 = $("#answer1").prop("checked");
      var checkedAnswer2 = $("#answer2").prop("checked");
      var checkedAnswer3 = $("#answer3").prop("checked");
      var checkedAnswer4 = $("#answer4").prop("checked");
      var checkedAnswer5 = $("#answer5").prop("checked");

      console.log(checkedAnswer1);
      
      //console.log(answerKey[i]);


      
      if (checkedAnswer1)    {
        console.log("answer #1 was checked");
        totalCorrect++;
        console.log("Total correct answers:" + totalCorrect);
        $("#totalCorrect").text(totalCorrect);
    }
      else {
        console.log("answer #1 was not checked");
        totalIncorrect++;
        console.log("Total incorrect answers: " + totalIncorrect);
        $("#totalIncorrect").text(totalIncorrect);
        }

      if (checkedAnswer2){
        console.log("answer #2 was checked");
        totalCorrect++;
        console.log("Total correct answers:" + totalCorrect);
        $("#totalCorrect").text(totalCorrect);
      }
      else {
        console.log("answer #2 was not checked");
        totalIncorrect++;
        console.log("Total incorrect answers: " + totalIncorrect);
        $("#totalIncorrect").text(totalIncorrect);
    }

    if (checkedAnswer3){
        console.log("answer #3 was checked");
        totalCorrect++;
        console.log("Total correct answers:" + totalCorrect);
        $("#totalCorrect").text(totalCorrect);
      }
      else {
        console.log("answer #3 was not checked");
        totalIncorrect++;
        console.log("Total incorrect answers: " + totalIncorrect);
        $("#totalIncorrect").text(totalIncorrect);
    }

    if (checkedAnswer4){
        console.log("answer #4 was checked");
        totalCorrect++;
        console.log("Total correct answers:" + totalCorrect);
        $("#totalCorrect").text(totalCorrect);
      }
      else {
        console.log("answer #4 was not checked");
        totalIncorrect++;
        console.log("Total incorrect answers: " + totalIncorrect);
        $("#totalIncorrect").text(totalIncorrect);
    }

    if (checkedAnswer5){
        console.log("answer #5 was checked");
        totalCorrect++;
        console.log("Total correct answers:" + totalCorrect);
        $("#totalCorrect").text(totalCorrect);
      }
      else {
        console.log("answer #5 was not checked");
        totalIncorrect++;
        console.log("Total incorrect answers: " + totalIncorrect);
        $("#totalIncorrect").text(totalIncorrect);
    }
       //I want to compare what is submitted to the values in my array.  
      
      //console.log(answerKey.includes(checkedAnswer1));
        
    
//code to check the answerKey for correct/incorrect answers
    var i;


        for (i = 0; i < answerKey.length; i++){
    
        /*Failed if else that I can't get to work.  Going to try indexOf method.
        
        if (checkedAnswer1 = answerKey[i]){
            console.log("Answer to Question 1 is" + checkedAnswer1);
           //alert("yay");
        }
        else if (correctAnswer2 == answerKey[i]){
            console.log("Answer to Question 2 is" + correctAnswer2);
        }
        else if (correctAnswer3 == answerKey[i]){
            console.log("Answer to Question 3 is" + correctAnswer3);
        }
        else if (correctAnswer4 == answerKey[i]){
            console.log("Answer to Question 4 is" + correctAnswer4);
        }
        else if (correctAnswer5 == answerKey[i]){
            console.log("Answer to Question 5 is" + correctAnswer5);
        }*/

    }

    
}

    function countDown() {
        clearInterval(intervalId);
        intervalID = setInterval(decrement, 1000);
    }

    function decrement(){
        timer--;
        $("#countDown").html("<h2>" + timer + "</h2>");
        
        if (timer === 0){
            stop();
            check();
        }
    }

    function stop() {
        timer = 0;
    //clearInterval(intervalId);
    }

countDown();

//begin to collect the answers and code it.  

//google "How to capture the value of radio buttons in a quiz"
