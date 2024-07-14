function checkAnswer() {
    var correctAnswer = 4;
    var userAnswer = document.querySelector('input[name="quiz"]:checked');
    if(userAnswer){

        if (userAnswer.value === correctAnswer)
        {
            document.getElementById("feedback").innerHTML ="Correct! Well done."
            // window.alert('Correct! Well done.');
        } 
        else{
            document.getElementById("result").innerHTML ="That's incorrect.Try again!"
            // window.alert('Thats incorrect.Try again!');
        } }

    }
document.getElementById('submit-answer').addEventListener('click', function () {
    checkAnswer();})