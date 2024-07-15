function getCurrentDatefr() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('fr-FR', options);
  }

  document.getElementById('currentDatefr').textContent = getCurrentDatefr();