document.addEventListener("DOMContentLoaded", function() {
  // Handle the first form submission
  const contactForm1 = document.getElementById('contactForm1');
  if (contactForm1) {
    contactForm1.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      
      alert('Thank you for your message! We will get back to you shortly.');
      
      contactForm1.reset(); // Optionally reset the form
    });
  }

  // Handle the second form submission (Join the club form)
  const joinClubForm = document.getElementById('joinClubForm');
  if (joinClubForm) {
    joinClubForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      
      alert('Thank you for joining the club! We will send updates to your email.');
      
      joinClubForm.reset(); // Optionally reset the form
    });
  }
});
