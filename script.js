// darle funcionalidad al boton like:

const likeButton = document.getElementById('like');

likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('liked');
});