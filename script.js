// --- Logo click -> Home ---
function goHome(){ window.location.href = "index.html"; }

// --- Optional: dynamic year in footer ---
(function setYear(){
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();
