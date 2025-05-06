const animateText = document.getElementById('animateText');
const button = document.getElementById('animateBtn');
const colorPicker = document.getElementById('favColor');

// Load saved color preference from localStorage
const savedColor = localStorage.getItem('textColor');
if (savedColor) {
  animateText.style.color = savedColor;
  colorPicker.value = savedColor;
}

// Trigger animation on button click
button.addEventListener('click', () => {
  animateText.classList.remove('slide-in'); // reset if needed
  void animateText.offsetWidth; // reflow to restart animation
  animateText.classList.add('slide-in');
});

// Save color preference to localStorage
colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  animateText.style.color = selectedColor;
  localStorage.setItem('textColor', selectedColor);
});