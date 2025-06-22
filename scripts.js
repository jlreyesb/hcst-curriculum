// Smooth scrolling for "Learn More" buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault(); // Prevent default anchor behavior
      const sectionId = event.target.getAttribute('href').substring(1); // Get the ID of the target section
      const targetSection = document.getElementById(sectionId);
  
      if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }



      document.addEventListener("DOMContentLoaded", function () {
        const categories = document.querySelectorAll(".category");
      
        categories.forEach(category => {
          category.addEventListener("mouseenter", function () {
            const popup = this.querySelector(".popup");
            if (popup) {
              popup.style.display = "block";
            }
          });
      
          category.addEventListener("mouseleave", function () {
            const popup = this.querySelector(".popup");
            if (popup) {
              popup.style.display = "none";
            }
          });
        });
      
        // Close popup when clicking outside
        document.addEventListener("click", function (event) {
          if (!event.target.closest(".category")) {
            document.querySelectorAll(".popup").forEach(popup => {
              popup.style.display = "none";
            });
          }
        });
      });
      


    });
  });
  