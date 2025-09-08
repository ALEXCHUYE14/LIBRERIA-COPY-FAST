document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navBar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const contactForm = document.getElementById('contact-form');

    // Abre/cierra el menú al hacer clic en el botón de hamburguesa
    hamburgerMenu.addEventListener('click', function() {
        navBar.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    // Cierra el menú al hacer clic en un enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navBar.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        });
    });

    // Funcionalidad para el formulario de contacto (enviar por WhatsApp)
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;

        // Reemplaza '51987654321' con tu número de WhatsApp real, incluyendo el código de país
        const numeroWhatsApp = '924996961'; 

        // Crea el mensaje pre-escrito con los datos del formulario
        const whatsappMessage = `Hola, mi nombre es ${nombre} y mi correo es ${correo}. Te escribo desde tu página web para el siguiente mensaje:
        
${mensaje}`;

        // Codifica el mensaje para que sea una URL segura
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Abre el enlace de WhatsApp
        const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    });
});