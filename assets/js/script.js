(function () {
  let navIsOpen = false
  const button = document.getElementById('open-menu')
  const menu = document.getElementById('nav-open')

  button.addEventListener('click', () => {
    if (navIsOpen) {
      navIsOpen = false
      button.setAttribute('aria-expanded', 'false')
      menu.style.display = 'none'
    } else {
      navIsOpen = true
      button.setAttribute('aria-expanded', 'true')
      menu.style.display = 'flex'
    }
  })
})()