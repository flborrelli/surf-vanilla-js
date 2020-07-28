function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  const tabImg = document.querySelectorAll('.js-tabmenu li img');
  
  //Verificando se os elementos selecionados existem
  if(tabMenu.length && tabContent.length && tabImg.length){
    //Manter sempre o primeiro item de animais ativo
    tabContent[0].classList.add('ativo');
    tabImg[0].classList.add('no-opacity');
    
    //Ativar tabs conforme click
    const activeTab = (index) => {
      tabContent.forEach(element => element.classList.remove('ativo'))
      tabContent[index].classList.add('ativo');
    }
    
    //Ativar e remover  classe 'no-opacity' das imagens
    const activeImg = (index) => {
      tabImg.forEach(element => element.classList.remove('no-opacity'));
      tabImg[index].classList.add('no-opacity');
    }
    
    
    //Ao clicar, executar as duas funções acima
    tabMenu.forEach((item, i) => {
      item.addEventListener('click', () => {
        activeTab(i);
        activeImg(i)
      })
    })
  }
}
initTabNav();

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if(accordionList.length){
    //Usamos o nextElementSibling para pegar o DD - próximo elemento depois do DT
    accordionList[0].nextElementSibling.classList.add(activeClass)
    
    function activeAccordion(){
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion);
    })
  }
}
initAccordion();

function initSmoothScroll(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
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
}
initSmoothScroll();

const sections = document.querySelectorAll('.js-scroll');

function initScrollAnimation(){
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
}
initScrollAnimation();