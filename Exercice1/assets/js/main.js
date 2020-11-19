let ul = document.getElementById('resultNumbers')
let button = document.getElementById('allNumbers');

function numbers(n1, n2) {
    let li = document.createElement('li');
    li.textContent = n1 * n2;
    ul.appendChild(li);
}
button.addEventListener('click', function () {
    n1 = document.getElementById('firstNumber').value;
    n2 = document.getElementById('secondNumber').value;
    numbers(n1, n2);
});








