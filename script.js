const choices = ['rock', 'paper', 'scissors'];
const choiceImages = {
    'rock': 'assets/rock-hand.png',
    'paper': 'assets/paper-hand.png',
    'scissors': 'assets/scissors-hand.png'
};
let userChoice;
let computerChoice;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        computerChoice = getComputerChoice();
        displayChoices();
        displayResult(determineWinner(userChoice, computerChoice));
    });
});

function displayChoices() {
    document.getElementById('user-choice').src = choiceImages[userChoice];
    document.getElementById('computer-choice').src = choiceImages[computerChoice];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    }
    if ((user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')) {
        return 'You win!';
    }
    return 'You lose!';
}

function displayResult(result) {
    document.getElementById('result-text').textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

document.getElementById('play-again').addEventListener('click', () => {
    window.location.reload();
});
