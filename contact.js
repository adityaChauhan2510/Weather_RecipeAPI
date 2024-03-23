// contact.js
fetch('data/contact.json')
  .then(response => response.json())
  .then(data => {
    const contactDiv = document.getElementById('contact');
    contactDiv.innerHTML = `
      <h2>Contact Information</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>LinkedIn:</strong> ${data.linkedin}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
    `;
  })
  .catch(error => {
    console.error('Error:', error);
  });
