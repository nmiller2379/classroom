const correctAnswer = "Paris";
const checkAnswerBtn = document.getElementById('check-answer-btn');
const resultContainer = document.getElementById('result');
const resultText = document.getElementById('result-text');
const radioButtons = document.querySelectorAll('input[name="answer"]');

// Add event listeners to radio buttons using a for loop
for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', function(event) {
    // You can directly access the selected value using event.target.value
    console.log(event.target.value);
  });
}

// Event listener for the "Check Answer" button
checkAnswerBtn.addEventListener('click', function() {
  let selectedAnswer;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedAnswer = radioButtons[i].value;
      break;
    }
  }

  if (selectedAnswer === correctAnswer) {
    resultText.textContent = "Correct! Paris is the capital of France.";
  } else {
    resultText.textContent = "Incorrect. The correct answer is Paris.";
  }

  resultContainer.style.display = 'block';
});