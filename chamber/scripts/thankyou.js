const params = new URLSearchParams(window.location.search);

["fname", "lname", "email", "phone", "business", "timestamp"].forEach(id => {
  document.getElementById(id).textContent = params.get(id);
});