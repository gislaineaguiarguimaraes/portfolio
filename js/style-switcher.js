/*====== toggle style switcher ======*/

//Fazendo a ligação com a div que está escondida
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler')
//Criando evento de escuta que reage no click e mostrar a div com opções de cores
styleSwitcherToggle.addEventListener('click', () => {
  //ao click a div ganha o estilo definido no css ".open"

  document.querySelector('.style-switcher').classList.toggle('open')
})

//escondendo div de cores na rolagem da pagina
window.addEventListener('scroll', () => {
  //Se a div esta aberta (contém o estilo open)
  if (document.querySelector('.style-switcher').classList.contains('open')) {
    //remova o estilo open
    document.querySelector('.style-switcher').classList.remove('open')
  }
})

/*====== theme colors======*/
//Função para alternar entre as cores, fazendo ligação com os links de cores css
const alternateStyles = document.querySelectorAll('.alternate-style')

//Se entre a lista de cores ("alternateStyles") a cor passada em parametro for a mesma que o atributo title
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute('title')) {
      style.removeAttribute('disabled')
    } else {
      style.setAttribute('disabled', 'true')
    }
  })
}

/*====== theme light and dark mode======*/

const dayNight = document.querySelector('.day-night')

dayNight.addEventListener('click', () => {
  //toggle alterna entre adicionar e remover um ou mais nomes de classes
  dayNight.querySelector('i').classList.toggle('fa-sun')
  dayNight.querySelector('i').classList.toggle('fa-moon')

  document.body.classList.toggle('dark')
  changeLogo()
})

function changeLogo() {
  const logoLight = '../images/logo2.png'
  const logoDark = '../images/logo1.png'
  const div = document.querySelector('.logo')
  const img = document.createElement('img')
  const aside = document.querySelector('.aside')

  if (document.body.classList.contains('dark')) {
    img.src = logoLight
    img.alt = 'logo clair'
    div.innerHTML = ' '
    div.appendChild(img)
    aside.style.background = '#151515'
  } else {
    img.src = logoDark
    img.alt = 'logo sombre'
    div.innerHTML = ' '
    div.appendChild(img)
    aside.style.background = 'white'
  }
}

window.addEventListener('load', () => {
  if (document.body.classList.contains('dark')) {
    changeLogo()
    dayNight.querySelector('i').classList.add('fa-sun')
  } else {
    changeLogo()
    dayNight.querySelector('i').classList.add('fa-moon')
  }
})
