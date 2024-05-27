function generatePassword() {
    const lengthInput = document.getElementById('length').value;
    const length = parseInt(lengthInput);

    // Verifica se o comprimento é um número válido e está dentro do intervalo permitido
    if (isNaN(length) || length <= 0 || length > 128) {
        alert('Por favor, insira um comprimento válido entre 1 e 128.');
        return;
    }

    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allowedChars = '';
    if (includeUppercase) allowedChars += uppercase;
    if (includeLowercase) allowedChars += lowercase;
    if (includeNumbers) allowedChars += numbers;
    if (includeSymbols) allowedChars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById('password').innerText = password;
}

function copyPassword() {
    const password = document.getElementById('password').innerText;
    navigator.clipboard.writeText(password).then(() => {
        alert('Senha copiada para a área de transferência');
    });
}
