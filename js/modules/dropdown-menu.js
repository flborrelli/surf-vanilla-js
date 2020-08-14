import outsideClick from './outside-click.js';


export default function initDropdownMenu(){
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')
  
  dropdownMenus.forEach(menu => {
    menu.addEventListener('click', showDropdown);
  })
  
  function showDropdown(event){
    event.preventDefault();
    //this faz referência ao menu selecionado no forEach acima, onde a função é chamada quando ocorre o evento
    this.classList.add('ativo');
    outsideClick(this, ()=> {
      this.classList.remove('ativo')
    });
  }
}


