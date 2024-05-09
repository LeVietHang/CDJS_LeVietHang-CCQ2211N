// Lắng nghe sự kiện click trên nút "Oẳn" và "Tù tì"
document.getElementById('rock').addEventListener('click', function() {
    playGame('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    playGame('paper');
});

// Hàm chơi trò chơi
function playGame(userChoice) {
    // Mảng chứa các lựa chọn có thể của máy tính
    const choices = ['rock', 'paper'];

    // Chọn ngẫu nhiên một lựa chọn từ mảng choices
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Hiển thị lựa chọn của máy tính
    console.log('Máy tính chọn:', computerChoice);

    // So sánh lựa chọn của người dùng và máy tính
    if (userChoice === computerChoice) {
        displayResult("Hòa!");
    } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
               (userChoice === 'paper' && computerChoice === 'rock')) {
        if (userChoice === 'rock') {
            displayResult("Máy tính thắng!");
        } else {
            displayResult("Người chơi thắng!");
        }
    }
}

// Hàm hiển thị kết quả
function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
}