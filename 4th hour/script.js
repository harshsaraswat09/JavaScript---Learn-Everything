
// 🎯 Practice 2: Rock Paper Scissors Logic

function rps(player, computer){
    if (player === computer) return "DRAW"

    if (
        player === 'rock' && computer === 'scissors' ||
        player === 'scissors' && computer === 'paper' ||
        player === 'paper' && computer === 'rock'
    ) {
        return "WIN"
    }
    
    return "LOSE"
}


console.log(rps('rock', 'paper'))  // LOSE