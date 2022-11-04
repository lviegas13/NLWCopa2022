function creatGame(player1, hour, player2) {
  return `
   <li>
      <img src="assets/icon=${player1}.svg" alt="Bandeira do ${player1}." />
      <strong>${hour}</strong>
      <img src="assets/icon=${player2}.svg" alt="Bandeira da ${player2}." />
    </li>
  `
}

let delay = -0.3;
function creatCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay:${delay}">
     <h2>${date}<span>${day}</span></h2>
     <ul>
       ${games}
     </ul>
   </div>
  
  `
}

document.querySelector('#cards').innerHTML =
  creatCard('20/11', 'domingo', creatGame('qatar', '13:00', 'ecuador')) +
  creatCard(
    '21/11',
    'segunda',
    creatGame('england', '10:00', 'iran') +
      creatGame('senegal', '13:00', 'netherlands') +
      creatGame('united states', '16:00', 'wales')
  ) +
  creatCard(
    '22/11',
    'terça',
    creatGame('argentina', '07:00', 'saudi arabia') +
      creatGame('mexico', '13:00', 'poland') +
      creatGame('france', '16:00', 'australia')
  ) +
  creatCard(
    '23/11',
    'quarta',
    creatGame('morocco', '07:00', 'croatia') +
      creatGame('germany', '10:00', 'japan') +
      creatGame('spain', '13:00', 'costa rica') +
      creatGame('belgium', '16:00', 'canada')
  ) +
  creatCard(
    '24/11',
    'quinta',
    creatGame('switzerland', '07:00', 'cameroon') +
      creatGame('uruguay', '10:00', 'south korea') +
      creatGame('portugal', '13:00', 'ghana') +
      creatGame('brazil', '16:00', 'serbia')
  )

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 900,
  reset: true
})
scrollReveal.reveal(`li`, { interval: 100 })
