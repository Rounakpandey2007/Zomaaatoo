// Add smooth fade-in on scroll
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('h1, p, img');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Small logo bounce on load
window.onload = () => {
  const headerImg = document.querySelector('header img');
  headerImg.style.transition = 'transform 1s ease';
  headerImg.style.transform = 'scale(1.1)';
  setTimeout(() => {
    headerImg.style.transform = 'scale(1)';
  }, 1000);
};
