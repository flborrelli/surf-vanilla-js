function initTabNav(){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const tabImg = document.querySelectorAll('[data-tab="menu"] li img');
  
  //Verificando se os elementos selecionados existem
  if(tabMenu.length && tabContent.length && tabImg.length){
    //Manter sempre o primeiro item de animais ativo
    tabContent[0].classList.add('ativo');
    tabImg[0].classList.add('no-opacity');
    
    //Ativar tabs conforme click e adicionar classe show-right ou show-down
    function activeTab(index){
      tabContent.forEach(element => element.classList.remove('ativo'))
      
      //Selecionando cada dataset e cada elemento
      const direcao = tabContent[index].dataset.anime;
      //Adicionando a classe ativo e valor da chave data-set-anime ao elemento
      tabContent[index].classList.add('ativo', direcao);
    }
    
    //Ativar e remover  classe 'no-opacity' das imagens
    function activeImg(index) {
      tabImg.forEach(element => element.classList.remove('no-opacity'));
      tabImg[index].classList.add('no-opacity');
    }
    
    
    //Ao clicar em cada item do array, pegar seu index e executar as duas funções acima passando esse index como argumento
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
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
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
}
initSmoothScroll();

const sections = document.querySelectorAll('[data-anime="scroll"]');

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




// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
