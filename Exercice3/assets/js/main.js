let ul = document.getElementById('resultNumbers')
let button = document.getElementById('allNumbers');
let li = document.createElement('li');
    
let numberResult = (n1, n2) => {
    if (isNaN(n1) || isNaN(n2)) {
        return `Ce n\est pas un nombre ! `
    }else
        return n1 * n2   
}
    button.addEventListener('click', function () {
        n1 = document.getElementById('firstNumber').value;
        n2 = document.getElementById('secondNumber').value;
        let result = numberResult(n1, n2)
        li.textContent = result;
        ul.appendChild(li);
    }) 
