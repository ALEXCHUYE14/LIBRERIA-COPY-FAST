 
        // Funcionalidad para el menú de hamburguesa
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-menu a').forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Funcionalidad para el formulario de WhatsApp
        document.getElementById('send-wa').addEventListener('click', function() {
            // Reemplaza <TU_NÚMERO_DE_WHATSAPP> con tu número, incluyendo el código de país.
            const whatsappNumber = '924996961'; 

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            // Validación básica para campos requeridos
            if (name === "" || email === "" || message === "") {
                alert("Por favor, completa todos los campos requeridos.");
                return;
            }

            // Construir el mensaje
            const waMessage = ¡Hola! 👋%0A%0A*He llenado el formulario en tu página web:*%0A%0A*Nombre:* ${name}%0A*Email:* ${email}%0A*Servicio de interés:* ${service}%0A*Mensaje:* ${message};

            // Abrir WhatsApp en una nueva pestaña
            window.open(https://wa.me/${whatsappNumber}?text=${waMessage}, '_blank');
        });