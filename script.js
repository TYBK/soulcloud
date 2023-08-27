// parallax animation //

window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelectorAll('.parallax-bg');
    parallaxBg.forEach(element => {
      const scrollPosition = window.pageYOffset;
      element.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Adjust the multiplier for desired effect
    });
  });
  
  // section paragraph fade in / out //
  
  const sectionParagraphs = document.querySelectorAll('.section-paragraph');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        entry.target.classList.remove('fade-out');
      } else {
        entry.target.classList.remove('fade-in');
        entry.target.classList.add('fade-out');
      }
    });
  }, {
    threshold: 0.5 // Adjust the threshold value to control the fade-in and fade-out points
  });
  
  sectionParagraphs.forEach(paragraph => {
    observer.observe(paragraph);
  });
  
    // introduction section fade in / out //

    const introductionSection = document.querySelector('.introduction');

    const introductionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.remove('fade-out');
        } else {
          entry.target.classList.remove('fade-in');
          entry.target.classList.add('fade-out');
        }
      });
    }, {
      threshold: 0.5 // Adjust the threshold value to control the fade-in and fade-out points
    });
    
    introductionObserver.observe(introductionSection);

    const popup = document.getElementById('popup');
    const popupTrigger = document.querySelector('.popup-trigger');
    const closePopup = document.getElementById('close-popup');

    popupTrigger.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    