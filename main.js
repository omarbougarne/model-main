const menuToggle = document.querySelectorAll('.menu-toggle');
    const menuDesktop = document.querySelectorAll('.menu-desktop');

    menuToggle.forEach((toggle, index) => {
      toggle.addEventListener('click', () => {
          menuDesktop[index].classList.toggle('active');
      });
  });