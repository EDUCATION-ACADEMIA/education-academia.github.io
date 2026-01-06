function toggleAnswer(btn) {
  const ans = btn.nextElementSibling;
  
  // Toggle visibility of the answer
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

// Dark Mode Toggle Function
function toggleDark() {
  // Toggle the dark mode class on body
  document.body.classList.toggle('dark');
  
  // Optionally toggle the button text if needed
  const darkButton = document.getElementById('dark-mode-toggle');
  if (document.body.classList.contains('dark')) {
    darkButton.textContent = 'Switch to Light Mode'; // Change text to indicate dark mode is on
  } else {
    darkButton.textContent = 'Switch to Dark Mode'; // Change text back to light mode option
  }
}
