export default function initSmoothScroll(){
  const linksInternos = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');
  
  function scrollToSection(event) {
    event.preventDefault();
    //selecionando o href dos botões do menu (que são iguais aos IDs)
    const href = event.currentTarget.getAttribute('href');
    //selecionando a seçao pelo id
    const section = document.querySelector(href)
    section.scrollIntoView({
      block: "start", 
      behavior: "smooth"
    })
  
  
    //FORMA ALTERNATIVA Podemos passar x, y ou options - objeto que recebe top e behavior como propriedades.
    // const topOfSection = section.offsetTop;
    // window.scrollTo({
    //   top: topOfSection,
    //   behavior: 'smooth',
    // })
  }
  
  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
};