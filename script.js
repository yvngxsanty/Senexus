const buttons = document.querySelectorAll('.custom-button');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#3e8e41'; /* Cambia el color al pasar el ratón */
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#2E7D57'; /* Restaura el color original */
  });
});

// Script para manejar el menú hamburguesa
document.querySelector('.nav-toggle').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('nav').classList.toggle('active');
});

// Script para actualizar el contador de caracteres
  document.getElementById('comentarios').addEventListener('input', function () {
    var texto = this.value;
    var contador = document.getElementById('contador');
    contador.textContent = texto.length + "/800";
  });

   // Contador de caracteres
   const comentarios = document.getElementById('comentarios');
   const contador = document.getElementById('contador');

   comentarios.addEventListener('input', function() {
       contador.textContent = `${comentarios.value.length}/800`;
   });

   // Enviar a webhook de Discord
   document.getElementById('webhookForm').addEventListener('submit', function(e) {
       e.preventDefault(); // Evita que el formulario se envíe de forma tradicional
       
       const mensaje = comentarios.value;
       const webhookURL = 'https://discord.com/api/webhooks/1279982448100511774/c-fYXiIgzZ6fR4M2QBWE4RzdIIVwVEY9SkWqfmFvMkZn3SVHR5ylwzsdPdpPq1UEJkto';

       const payload = {
           content: mensaje
       };

       fetch(webhookURL, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(payload)
       })
       .then(response => {
           if (response.ok) {
               alert('Mensaje enviado con éxito a Discord');
               comentarios.value = ''; // Limpiar el campo de texto
               contador.textContent = '0/800'; // Reiniciar el contador
           } else {
               alert('Hubo un error al enviar el mensaje');
           }
       })
       .catch(error => {
           alert('Error: ' + error.message);
       });
   });
