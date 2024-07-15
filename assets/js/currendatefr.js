function getCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('fr-FR', options);
  }

  document.getElementById('currentDate').textContent = getCurrentDate();