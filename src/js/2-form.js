const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const saveToLocalStorage = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
document.addEventListener('input', event => {
  if (event.target.name) {
    formData[event.target.name] = event.target.value;
    saveToLocalStorage();
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    Object.assign(formData, JSON.parse(savedData));
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email !== '' && formData.message !== '') {
    alert('The form has been sent successfully!');
  } else {
    alert('Fill please all fields');
  }
  console.log(formData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
});
