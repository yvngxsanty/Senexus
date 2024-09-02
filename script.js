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

   // Sugerencias en Discord
   document.getElementById('webhookForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    const message = document.getElementById('comentarios').value;

    if (!message) {
        alert('Por favor, escribe un mensaje.');
        return; // No continuar si el campo está vacío
    }

    const webhookURL = 'https://discord.com/api/webhooks/1279982448100511774/c-fYXiIgzZ6fR4M2QBWE4RzdIIVwVEY9SkWqfmFvMkZn3SVHR5ylwzsdPdpPq1UEJkto';

    // ID del rol que quieres mencionar
    const roleID = '1280004764116975616';

    const payload = {
        content: `<@&${roleID}>`, // Menciona el rol en el mensaje normal
        embeds: [{
            title: "Nuevo mensaje de sugerencia",
            description: message,
            color: 65280, // Puedes cambiar el color (en formato decimal)
            footer: {
                text: `Enviado por un usuario anónimo`
            },
            timestamp: new Date().toISOString() // Formato ISO para el timestamp
        }]
    };

    console.log("Enviando payload:", payload); // Verificar en la consola si el payload está correcto

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
            document.getElementById('comentarios').value = ''; // Limpiar el textarea después de enviar
            document.getElementById('contador').textContent = '0/800'; // Reiniciar el contador
        } else {
            return response.text().then(text => { throw new Error(text); });
        }
    })
    .catch(error => {
        console.error('Error al enviar el mensaje:', error);
        alert('Hubo un error al enviar el mensaje: ' + error.message);
    });
});
