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
  document.body.classList.toggle('dark');
  const darkButton = document.getElementById('dark-mode-toggle');
  if (document.body.classList.contains('dark')) {
    darkButton.textContent = 'Switch to Light Mode';
  } else {
    darkButton.textContent = 'Switch to Dark Mode';
  }
}
