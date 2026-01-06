// Toggle visibility of answers
function toggleAnswer(btn) {
  const ans = btn.nextElementSibling;
  if (ans.classList.contains("hidden")) {
    ans.classList.remove("hidden");
    btn.textContent = "Hide Answer";
    btn.setAttribute("aria-expanded", "true");
  } else {
    ans.classList.add("hidden");
    btn.textContent = "Show Answer";
    btn.setAttribute("aria-expanded", "false");
  }
}

// Toggle dark mode
function toggleDark() {
  // Toggle the dark class on the body
  document.body.classList.toggle('dark');
  
  // Change the button text based on the current mode
  const button = document.getElementById('dark-mode-toggle');
  if (document.body.classList.contains('dark')) {
    button.textContent = '🌞 Light Mode';  // Change to Light Mode when in Dark Mode
    localStorage.setItem('theme', 'dark');
  } else {
    button.textContent = '🌙 Dark Mode';  // Change to Dark Mode when in Light Mode
    localStorage.setItem('theme', 'light');
  }
}

// Check if the theme was saved in localStorage and apply it on page load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  // Change button text to 'Light Mode' when in dark mode
  document.getElementById('dark-mode-toggle').textContent = '🌞 Light Mode';
} else {
  // Default to Light Mode text if no preference is saved
  document.getElementById('dark-mode-toggle').textContent = '🌙 Dark Mode';
}
