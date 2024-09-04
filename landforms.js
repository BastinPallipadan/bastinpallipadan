function checkAnswer(answer) {
    const correctAnswer = "Fold Mountains";
    let resultElement = document.getElementById('result');

    if (answer === correctAnswer) {
        resultElement.innerText = "Correct! Fold Mountains are formed by the collision of tectonic plates.";
    } else {
        resultElement.innerText = "Incorrect. Try again!";
    }
}
