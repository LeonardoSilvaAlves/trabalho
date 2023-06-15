// Scroll suave para os links de navegação
const scrollLinks = document.querySelectorAll('a[href^="#"]');
for (const link of scrollLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  window.scrollTo({
    top: target.offsetTop,
    behavior: 'smooth'
  });
}


function send() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('zfnh7AkAvm6FP75Yi');
};

window.onload = function send(event) {
  document.getElementById('contact-form').addEventListener('submit', function send(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}

