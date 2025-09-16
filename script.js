document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Simple form feedback logic
  document.getElementById('formMessage').textContent = "Thank you! Your message has been sent.";
  document.getElementById('formMessage').style.color = "green";

  // Clear form fields
  this.reset();
});
