var contact = document.getElementById('contact');

function handleSubmit(e) {
  var name = document.getElementById('contact-name').value;
  var email = document.getElementById('contact-email').value;
  var tel = document.getElementById('contact-tel').value;
  var message = document.getElementById('contact-message').value;

  console.log(name, email, tel, message);

  axios({
    method: 'post',
    url: 'https://formspree.io/' + BASE_EMAIL,
    data: {
      _subject: '2LIG - Novo contato de ' + name,
      Nome: name,
      Email: email,
      Telefone: tel,
      Mensagem: message
    }
  });

  e.preventDefault();
}

contact.addEventListener('submit', handleSubmit, false);