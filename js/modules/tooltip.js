export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(event) {
    const tooltipBox = createTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
    //Precisamos acessar a posição de onde o mouse foi passado no elemento, para aparecer o tooltip
    // Para tanto, acessaremos a propriedade STYLE do elemento onde foi passado o mouse
    //Style é um objeto de cada elemento do DOM, com propriedade de estilo deste elemento
    //Nesse caso, estamos acessando o top e left e atribuindo a eles o valor de onde o mouse foi passado no eixo X e Y + 20 + 'px' (para ficar 20 px distante do mouse)
    tooltipBox.style.top = event.pageY + 20 + "px";
    tooltipBox.style.left = event.pageX + 20 + "px";

    //Criamos e atribuimos a nossa propriedade tooltipBox do objeto onMouseLeave o valor atribuido aqui internamente na função
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;

    //Adicionamos novo evento para retirar a tooltip quando o user retirar o mouse do elemento
    this.addEventListener("mouseleave", onMouseLeave);
  }

  //Se criarmos a função assim ela não funcionará, pois ela não tem acesso à variável tooltipBox que está no escopo interno da função acima
  //Poderiamos ter criado dentro da outra função, mas para deixar o código mais organizado fazemos com um objeto abaixo
  // function onMouseLeave(){
  //   tooltipBox.remove();
  // }

  //Precisamos usar criar um objeto e utilizar necessariamente o método handleEvent(), para funcionar. E passamos esse objeto como callback na função acima.

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  function createTooltipBox(element) {
    //Criamos uma div
    const tooltipBox = document.createElement("div");

    // Como estamos passando o element como parâmetro, o texto será referente ao aria-label do elemento que passarmos o mouse em cima
    // nesse caso, o element virá através da função onMouseOver que é executada quando o usuário passar o mouse em cima do elemento com tooltip.
    // Note-se que o addEventListener adiciona um elemento a um evento (esse elemento é item do forEach acima e o this da função acima, pois o MouseOver faz referência a ele)
    // Por fim, esse elemento que está sendo selecionado abaixo.
    const text = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");

    // O texto da div será o texto do aria-label do elemento selecionado
    tooltipBox.innerHTML = text;

    //Adicionamos a div criada ao final do nosso body - assim ela já aparecerá no DOM
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
