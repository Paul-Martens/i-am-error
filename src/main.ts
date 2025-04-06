import './main.css';

window.addEventListener('load', () => {
  const heading = document.createElement('h1');
  heading.textContent = 'I Am Error';

  document.getElementById('app')?.appendChild(heading);
});
