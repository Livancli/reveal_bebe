const revealButton = document.getElementById('revealButton');
const revealContainer = document.getElementById('revealContainer');
const countdownElement = document.getElementById('countdown');
const animationElement = document.getElementById('animation');
const genderTextElement = document.getElementById('genderText');


revealButton.addEventListener('click', () => {
  revealButton.disabled = true;
  revealContainer.classList.remove('hidden');
  revealButton.classList.add('hidden');
  let countdown = 5;
  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerText = countdown.toString();
    if (countdown === 0) {
      clearInterval(countdownInterval);
      const gender = Math.random() < 0.5 ? 'Menino' : 'Menina';
      // const gender = 'Menino';
      genderTextElement.innerText = gender;
      animationElement.innerText = gender === 'Menino' ? '👦Menino' : '👧Menina';
      countdownElement.classList.add('hidden');
      document.body.style.backgroundColor = gender === 'Menino' ? 'rgb(173, 214, 250)' : ' rgb(244, 205, 253)';
    }
  }, 1000);
});
