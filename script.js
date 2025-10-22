document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.btn').forEach(b=>{
    b.addEventListener('click', (e)=>{
      e.preventDefault();
      b.animate([{transform:'scale(1)'},{transform:'scale(0.96)'},{transform:'scale(1)'}],{duration:220});
    });
  });
  const heroImg = document.querySelector('.hero-img');
  if(heroImg) heroImg.style.opacity = '1';
});