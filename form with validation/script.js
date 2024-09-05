let image = document.getElementById("body");

      function addClass() {
        image.classList.add('noimage');
      }

      function removeClass() {
        image.classList.remove('noimage');
      }

      function toggleClass() {
        image.classList.toggle('noimage');
      }

      document.getElementById('courierForm').addEventListener('submit', function(event) {
        let isValid = true;

        // Clear previous errors
        document.getElementById('nameError').innerText = '';
        document.getElementById('emailError').innerText = '';
        document.getElementById('feedbackError').innerText = '';
        document.getElementById('ratingsError').innerText = '';

        // Validate name
        const name = document.getElementById('name').value;
        if (name.trim() === '' || typeof(name)!="string") {
          isValid = false;
          document.getElementById('nameError').innerText = 'Name is required.';
        }

        // Validate email
        const email = document.getElementById('email').value;
        if (email.trim() === '') {
          isValid = false;
          document.getElementById('emailError').innerText = 'Email is required.';
        } else {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(email)) {
            isValid = false;
            document.getElementById('emailError').innerText = 'Please enter a valid email address.';
          }
        }

        // Validate feedback
        const feedback = document.getElementById('feedback').value;
        if (feedback.trim() === '') {
          isValid = false;
          document.getElementById('feedbackError').innerText = 'Feedback is required.';
        }

        // Validate ratings
        const ratings = document.getElementById('ratings').value;
        if (ratings === '') {
          isValid = false;
          document.getElementById('ratingsError').innerText = 'Please select a rating.';
        }

        // Prevent form submission if validation fails
        if (!isValid) {
          event.preventDefault();
        }
      });