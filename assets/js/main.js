
(function(){
  // Current year in footer
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }

  // Back to top
  const btt = document.getElementById('backToTop');
  if(btt){
    btt.addEventListener('click', function(e){
      e.preventDefault();
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  // Highlight active nav link based on filename
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path){ a.classList.add('active'); }
  });
})();
