export default function initTabNav(){
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
};