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

function toggleDark() {
  // Toggle the 'dark' class on the body element
  document.body.classList.toggle('dark');
  
  // Optionally change the button text based on dark mode status
  const darkButton = document.getElementById('dark-mode-toggle');
  if (document.body.classList.contains('dark')) {
    darkButton.textContent = 'Switch to Light Mode';
  } else {
    darkButton.textContent = 'Switch to Dark Mode';
  }
}