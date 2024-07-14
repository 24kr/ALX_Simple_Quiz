// Addition function
function add(number1, number2) {
    return number1 + number2;
}
    document.getElementById('add').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
  });

//  Subtraction function
function sub(number1, number2) {
    return number1 - number2;
}
document.getElementById('subtract').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = sub(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Multipliction 
function mult(number1, number2) {
    return number1 * number2;
}
document.getElementById('multiply').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = mult(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Divition function
function div(number1, number2) {
    return number1 / number2;
}
document.getElementById('divide').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = div(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

