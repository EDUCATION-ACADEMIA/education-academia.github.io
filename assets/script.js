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
  // Save the theme preference in localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Check if the theme was saved in localStorage and apply it on page load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}
