export default function initFuncionamento(){
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(e => +e); //array de dias da semana (seg a sex)
  const horarioSemana = funcionamento.dataset.horario.split(',').map(e => +e); // array de horario de funcionamento (8, 18)

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);


  if(semanaAberto && horarioAberto){
    funcionamento.classList.add('aberto');
  }
}
