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
  document.body.classList.toggle('dark');
}

// Optionally, store the user's theme preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// Add event listener for dark mode toggle button
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
  toggleDark();
  // Save the theme preference in localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
