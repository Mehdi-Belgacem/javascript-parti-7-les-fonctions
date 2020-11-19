let paragraphe = document.getElementById('text');

let btnBold = document.getElementById('btnBold');
btnBold.addEventListener('click', function () { paragraphe.style.fontWeight = 'bold'; });

let btnColor = document.getElementById('colorChange');
btnColor.addEventListener('click', function () { paragraphe.style.color = 'orange'; });

let btnSize = document.getElementById('size');
btnSize.addEventListener('click', function () { paragraphe.style.fontSize = '2rem'; });