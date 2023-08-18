const revealButton = document.getElementById('revealButton');
const revealContainer = document.getElementById('revealContainer');
const countdownElement = document.getElementById('countdown');
const animationElement = document.getElementById('animation');
const genderTextElement = document.getElementById('genderText');

const genderImage = document.createElement('img');


document.body.style.overflow = "hidden";

revealButton.addEventListener('click', () => {
  revealButton.disabled = true;
  revealContainer.classList.remove('hidden');
  revealButton.classList.add('hidden');
  let countdown = 10;
  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerText = countdown.toString();
    if (countdown === 0) {
      clearInterval(countdownInterval);
      const gender = Math.random() < 0.5 ? 'Menino' : 'Menina';
      // const gender = 'Menino';
      genderTextElement.innerText = gender;

      const genderImage = document.createElement('img');
genderImage.src = gender === 'Menino' ? 'img/bebe-menino.png' : 'img/bebe-menina.png';
genderImage.alt = gender === 'Menino' ? 'Menino' : 'Menina';
genderImage.classList.add('gender-image');
animationElement.innerHTML = '';
animationElement.appendChild(genderImage);
      countdownElement.classList.add('hidden');
      document.body.style.backgroundImage = gender === 'Menino' ? 'url(./img/nuvemAzul.jpg)' : 'url(./img/nuvemRosa.jpg)';
    }
  }, 1000);
});


