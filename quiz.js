function checkAnswer() {
    var correctAnswer = 4;
    var userAnswer = document.getElementsByName('quiz');

    for (i = 0; i < userAnswer.length; i++) {
        if (userAnswer[i].checked = correctAnswer)
        {
            window.alert('Correct! Well done.');
        } 
        else{
            window.alert('Thats incorrect.Try again!');
        } 
        }

    }
document.getElementById('submit-answer').addEventListener('click', function () {
    checkAnswer();})