const firstButton = document.getElementsByClassName('first-tittle-tab');
const secondContent = document.getElementById('second-content-tab');
const secondButton = document.getElementsByClassName('second-tittle-tab');
const firstContent = document.getElementById('first-content-tab');

for (let i = 0; i < firstButton.length; i += 1) {
  firstButton[i].addEventListener('click', function () {
    secondContent.style.display = 'none';
    firstContent.style.display = 'block';
  });
}
for (let i = 0; i < secondButton.length; i += 1) {
  secondButton[i].addEventListener('click', function () {
    secondContent.style.display = 'block';
    firstContent.style.display = 'none';
  });
}
