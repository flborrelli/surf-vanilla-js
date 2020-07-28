const initTabNav = () =>{
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

const accordionList = document.querySelectorAll('.js-accordion dt');


function activeAccordion(){
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach(item => {
  item.addEventListener('click', activeAccordion);
})
