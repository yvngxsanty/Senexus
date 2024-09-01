const buttons = document.querySelectorAll('.custom-button');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#3e8e41'; /* Cambia el color al pasar el ratón */
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#4CAF50'; /* Restaura el color original */
  });
});

// Script para manejar el menú hamburguesa
document.querySelector('.nav-toggle').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('nav').classList.toggle('active');
});