const menuToggle = document.querySelectorAll('.menu-toggle');
    const menuDesktop = document.querySelectorAll('.menu-desktop');

    menuToggle.forEach((toggle, index) => {
      toggle.addEventListener('click', () => {
          menuDesktop[index].classList.toggle('active');
      });
  });
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const usernameRegex = /^.{4,}$/;
    const emailRegex = /@/; 
    const passwordRegex = /^.{7,}$/; 

    if (!usernameRegex.test(username)) {
        alert('Username must be at least 4 characters long');
        event.preventDefault(); 
    }

    if (!emailRegex.test(email)) {
        alert('Email must contain the "@" symbol');
        event.preventDefault();
    }

    if (!passwordRegex.test(password)) {
        alert('Password must be at least 7 characters long');
        event.preventDefault();
    }
});
