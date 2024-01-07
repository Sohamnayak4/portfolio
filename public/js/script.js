document.addEventListener('DOMContentLoaded', function () {
  // Set a short timeout to allow the CSS transition to take effect
  setTimeout(() => {
    // Set body and section opacity to 1 for fade-in effect
    document.body.style.opacity = '1';
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.opacity = '1';
    });
  }, 500);
  
  // Add interactivity here
  const myButton = document.getElementById('myButton');

  if (myButton) {
    myButton.addEventListener('click', function () {
      alert('Button clicked!');
    });
  }

  // Example: Change background color on hover for navigation links
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach((link) => {
    link.addEventListener('mouseover', function () {
      this.style.backgroundColor = '#007BFF';
      this.style.color = '#fff';
    });

    link.addEventListener('mouseout', function () {
      this.style.backgroundColor = '';
      this.style.color = '#fff';
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS
  AOS.init();

  // Add interactivity here
  const myButton = document.getElementById('myButton');

  if (myButton) {
    myButton.addEventListener('click', function () {
      alert('Button clicked!');
    });
  }

  // Example: Change background color on hover for navigation links
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach((link) => {
    link.addEventListener('mouseover', function () {
      this.style.backgroundColor = '#007BFF';
      this.style.color = '#fff';
    });

    link.addEventListener('mouseout', function () {
      this.style.backgroundColor = '';
      this.style.color = '#fff';
    });
  });
});
