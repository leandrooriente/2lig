var contact = document.getElementById('contact');

function handleSubmit(e) {
  var name = document.getElementById('contact-name');
  var email = document.getElementById('contact-email');
  var tel = document.getElementById('contact-tel');
  var message = document.getElementById('contact-message');
  var button = document.getElementById('submit-button');
  var alert = document.getElementById('alert');
 
    var $recaptcha = document.querySelector('#g-recaptcha-response');
    if($recaptcha.value === '') {
        alert('Recapcha is required');
    }else{
        alert.addEventListener('click', function() {
            alert.classList.remove('show');
          })
        
          button.innerHTML = 'Enviando...'
          button.disabled = true;
        
          axios({
            method: 'post',
            url: 'https://formspree.io/f/myyoyody',
            data: {
              _subject: '2LIG - Novo contato de ' + name.value,
              Nome: name.value,
              Email: email.value,
              Telefone: tel.value,
              Mensagem: message.value
            }
          })
          .then(function(response) {
            alert.classList.add('show');
            button.disabled = false;
            name.value = '';
            email.value = '';
            tel.value = '';
            message.value = '';
            button.innerHTML = 'Enviar';
          });
    }
  e.preventDefault();
}

contact.addEventListener('submit', handleSubmit, false);