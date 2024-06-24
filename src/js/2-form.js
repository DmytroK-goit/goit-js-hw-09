const formEvent = document.querySelector('.feedback-form');

let formData = { email: '', message: '' };
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    formData = JSON.parse(savedData);

    formEvent.elements['email'].value = formData.email;
    formEvent.elements['message'].value = formData.message;
  }
});

formEvent.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value;
    localStorage.setItem('formData', JSON.stringify(formData));
  }
});
formEvent.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submitted:', formData);
  localStorage.removeItem('formData');
  formEvent.reset();
});
