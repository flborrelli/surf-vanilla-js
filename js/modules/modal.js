export default function initModal(){
  const openBtn = document.querySelector('[data-modal="abrir"]');
  const closeBtn = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  
  //Somente executar as funções abaixo  caso os elemento acima existam
  if(openBtn && closeBtn && containerModal){
    function toggleModal(event){
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }
    
    function outModalClick(event){
      if(event.target === this){
        toggleModal(event)
      }
    }
  openBtn.addEventListener('click', toggleModal);
  closeBtn.addEventListener('click', toggleModal);
  containerModal.addEventListener('click', outModalClick);
  }
}
