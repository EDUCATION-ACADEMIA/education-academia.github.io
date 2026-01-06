function toggleAnswer(btn){
  const ans = btn.nextElementSibling;
  if(ans.classList.contains("hidden")){
    ans.classList.remove("hidden");
    btn.textContent = "Hide Answer";
  } else {
    ans.classList.add("hidden");
    btn.textContent = "Show Answer";
  }
}

function toggleDark(){
  document.body.classList.toggle('dark');
}
