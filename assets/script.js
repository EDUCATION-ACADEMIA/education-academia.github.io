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
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Check for theme in localStorage and apply it
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}