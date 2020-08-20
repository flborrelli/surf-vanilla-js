import outsideClick from './outside-click.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, showDropdown);
    });
  });

  function showDropdown(event) {
    event.preventDefault();
    //this faz referência ao menu selecionado no forEach acima, onde a função é chamada quando ocorre o evento
    this.classList.add('ativo');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  };
}


