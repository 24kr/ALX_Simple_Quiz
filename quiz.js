// quiz.js

// Function to check if the selected answer is correct
function checkAnswer() {
    // Get the selected answer from the radio buttons
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Define the correct answer
    const correctAnswer = '4';

    // Get the user's answer
    const userAnswer = selectedOption ? selectedOption.value : null;

    // Check if the user's answer matches the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = 'green';
    } else if (userAnswer !== null) {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = 'red';
    } else {
        // Handle the case where no option is selected
        feedbackElement.textContent = 'Please select an answer.';
        feedbackElement.style.color = 'orange';
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
