function toggleMenu(){
  const menu=document.querySelector(".menu-links");
  const icon= document.querySelector(".hamburger-icon");

  menu.classList.toggle("open")
  icon.classList.toggle("open")
}

// Projects navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const projectsWrapper = document.querySelector('.projects-wrapper');
  const prevBtn = document.getElementById('prevProjects');
  const nextBtn = document.getElementById('nextProjects');
  const projects = document.querySelectorAll('.projects-wrapper .details-container');
  
  let currentIndex = 0;
  const projectsPerView = 2;
  const totalProjects = projects.length;
  
  function updateProjects() {
    const offset = currentIndex * (projects[0].offsetWidth + 32); // 32px is the gap
    projectsWrapper.style.transform = `translateX(-${offset}px)`;
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex + projectsPerView >= totalProjects;
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateProjects();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentIndex + projectsPerView < totalProjects) {
      currentIndex++;
      updateProjects();
    }
  });
  
  // Initial setup
  updateProjects();
});