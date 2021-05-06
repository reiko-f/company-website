function validation() {  

  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  let submitBtn = document.getElementById('submit-btn');

  let confirmMessage = document.getElementById('confirm-message');
  let errorMessage;

  if (firstName=='' || firstName.length<2) {
    errorMessage = 'Please enter a valid name.';
    confirmMessage.innerHTML = errorMessage;
    confirmMessage.style.color = 'blue';
    return false;
  }

  if (lastName=='' || lastName.length<2) {
    errorMessage = 'Please enter a valid name.';
    confirmMessage.innerHTML = errorMessage;
    confirmMessage.style.color = 'blue';
    return false;
  }

  if (email=='' || ! email.includes('@') || email.length<5) {
    errorMessage = 'Please enter a valid email address.';
    confirmMessage.innerHTML = errorMessage;
    confirmMessage.style.color = 'blue';
    return false;
  }

  if (message=='' || message.length<5) {
    errorMessage = 'Please enter a message.';
    confirmMessage.innerHTML = errorMessage;
    confirmMessage.style.color = 'blue';
    return false;
  }

  else {
    alert('Your message has been submitted.');
    return true;
  }  
}
