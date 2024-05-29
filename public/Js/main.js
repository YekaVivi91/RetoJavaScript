document.getElementById('percentageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const percentage = parseFloat(document.getElementById('percentage').value);
    const number = parseFloat(document.getElementById('number').value);

    if (!isNaN(percentage) && !isNaN(number)) {
        const result = (percentage / 100) * number;
        const formattedResult = Number.isInteger(result) ? result : result.toFixed(2); 
        document.getElementById('result').innerText = `Resultado: ${formattedResult}`;
    } else {
        document.getElementById('result').innerText = 'Por favor, ingresa valores válidos.';
    }
});
