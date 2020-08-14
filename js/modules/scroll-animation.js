export default function initScrollAnimation(){
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  
  if(sections.length){
    const windowHalf = window.innerHeight * 0.6;
    
    function scrollAnimation(){
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHalf) < 0;
        if(isSectionVisible){
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo') //Retirar a classe para animar novamente após o user descer o scroll
    
        }
      })
    }
    scrollAnimation() //Animar o site assim que o usuário entrar
    window.addEventListener('scroll', scrollAnimation); //Animar no scroll
  }
};