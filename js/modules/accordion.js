export default function initAccordion(){
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
};