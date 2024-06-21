function playGame(playerChoice) {
    const choices = ['steen', 'papier', 'schaar'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(playerChoice, computerChoice);
    
    document.getElementById('result').innerText = `
        Jij kiest: ${playerChoice}
        Computer kiest: ${computerChoice}
        Resultaat: ${result}
    `;
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'Gelijkspel!';
    }

    if (
        (player === 'steen' && computer === 'schaar') ||
        (player === 'schaar' && computer === 'papier') ||
        (player === 'papier' && computer === 'steen')
    ) {
        return 'Jij wint!';
    } else {
        return 'Computer wint!';
    }
}