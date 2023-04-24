  const toTop = document.querySelector('.to-top')
  window.addEventListener('scroll', ()=>{
    if (document.documentElement.scrollTop > 300) {
        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active')
    }
  })