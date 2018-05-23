for (let i = 0; i < 8; i++) {

  const card = document.querySelector('.card${i}');
  // const faceUpDown = document.querySelector('face-down');

  card.addEventListener('click', function () {
    card.classList.toggle('face-down');
    console.log('card clicked');
  });
}
