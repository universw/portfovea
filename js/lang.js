const languageSwitcher = document.getElementById('language-switcher');

// Function to load language JSON and update content
function changeLanguage(language) {
  fetch(`lang/${language}.json`)
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(item => {
        const key = item.getAttribute('data-i18n');
        if (data[key]) {
          item.textContent = data[key];
        }
      });
    })
    .catch(error => console.error('Error loading language file:', error));
}

// Change language on click
languageSwitcher.addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
  changeLanguage(selectedLanguage);
});