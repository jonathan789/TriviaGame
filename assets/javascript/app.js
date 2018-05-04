
  
  var qBank = [
    {
      question: "Q1?",
      choices: {
          a: "ans1",
          b: "ans2",
          c: "ans3",
          d: "ans4"
      },
      answer: "a"
    },
    {
      question: "Q2?",
      choices: {
          a: "ans1!",
          b: "ans2!",
          c: "ans3!",
          d: "ans4!"
      },
      answer: "b"
    },
    {
      question: "Q3?",
      choices: {
          a: "ans1?",
          b: "ans2?",
          c: "ans3?",
          d: "ans4"
      },
      answer: "c"
    }
    
    
  ];
    
//   var timerOn = false;
//   var intervalId;
    
  var qBankAns = ["1","2","3"];
// for(var i = 0; i <qBank.length; i++){
//   qBankAns.push(qBank[i].answer)
// }
// console.log(qBankAns);   
    
    var counter = 0;    
    var time = 30;
    var intervalId;
    
    function run() {
      intervalId = setInterval(decrement, 1000);
      var displayTime = $("<h2>");
      displayTime.addClass("count");
      $("#quiz").append(displayTime);
   

    }
    
    function decrement() {
      
      time--;
      
      $(".count").text(time);
      
      if(time === 0){
        stop();
        timeUp();
      }
    }
      
    function stop() {
      clearInterval(intervalId);
    }
    
    
    function timeUp(){
    
      var userAnswers = $('.test');
      var checked = [];
      for (var i=0; i < userAnswers.length; i++){
      if(userAnswers[i].checked){
      checked.push(userAnswers[i].value)
        }
      }
     console.log(checked)
     for (var i = 0; i < checked.length; i++) {
     if(checked[i] !== qBankAns[i]){ 
     } else if (checked[i] === qBankAns[i]) {
      counter++;
       }
     }
  
    console.log(counter);
  
    var score = Math.round(counter / qBankAns.length * 100);
  
    console.log(score);
    $("#submitButton").css('display','none');
    $("#quiz").append("<h1> Your score is: "+ score + "</h1>");
   
      
    }
   
    
// rendering display 
$("#start").on('click', function(){ 
    
    run();
    $("#start").css('display','none');
    for(var i = 0; i < qBank.length; i++) {
      $("#quiz").append("<h2>" + qBank[i].question + "</h2>");
      $("#quiz").append("<input type='radio' class='test' value='1' name='question" + i + "'" + "/>" + qBank[i].choices.a);
      $("#quiz").append("<input type='radio' class='test' value='2' name='question" + i + "'" + "/>" + qBank[i].choices.b);
      $("#quiz").append("<input type='radio' class='test' value='3' name='question" + i + "'" + "/>" + qBank[i].choices.c);
      $("#quiz").append("<input type='radio' class='test' value='4' name='question" + i + "'" + "/>" + qBank[i].choices.d);

    }
    var submit = $('<input/>').attr({ type: 'button', id:'submitButton', value:'submit'});
    $("#quiz").append("<br><br>");
    $("#quiz").append(submit);
    console.log(submit);
 
 // someone: Ask David how to parse radio button data in order to check with user answers to correct answers 
$("#submitButton").on('click', function(){

  var userAnswers = $('.test');
  var checked = [];
  for (var i=0; i < userAnswers.length; i++){
    if(userAnswers[i].checked){
      checked.push(userAnswers[i].value)
    }
  }
  console.log(checked)
  for (var i = 0; i < checked.length; i++) {
    if(checked[i] !== qBankAns[i]){ 
    } else if (checked[i] === qBankAns[i]) {
      counter++;
    }
  }
  
  console.log(counter);
  
  var score = Math.round(counter / qBankAns.length) * 100;
  
  console.log(score);
  $("#submitButton").css('display','none');
  $("#quiz").append("<h1> Your score is: "+ score + "</h1>");
  
  
}); 
  
  
  
  
});  