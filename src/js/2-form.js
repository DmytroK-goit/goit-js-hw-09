const formEvent = document.querySelector('.feedback-form');

// Ініціалізація об'єкта для зберігання даних форми
let formData = { email: '', message: '' };

// Завантаження збережених даних з localStorage при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    formData = JSON.parse(savedData);
    // Встановлення збережених значень у форму
    formEvent.elements['email'].value = formData.email;
    formEvent.elements['message'].value = formData.message;
  }
});

// Оновлення formData та збереження у localStorage при введенні даних
formEvent.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value;
    localStorage.setItem('formData', JSON.stringify(formData)); // Збереження в localStorage
  }
});

// Обробка події submit форми
formEvent.addEventListener('submit', event => {
  event.preventDefault();
  // Логування даних форми
  console.log('Form submitted:', formData);

  // Очищення даних у localStorage та формі
  localStorage.removeItem('formData');
  formEvent.reset();
});
