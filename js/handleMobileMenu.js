let showMenu = false

export const handleMobileMenu = () => {
  const menuButtons = document.querySelectorAll([
    '[mobile-menu]',
    '.mobile-menu__list__item',
  ])
  const mobileMenu = document.querySelector('.mobile-menu')

  const toggleMenu = () => {
    showMenu = !showMenu
    if (showMenu) mobileMenu.style.transform = 'translateX(-100%)'
    else mobileMenu.style.transform = 'translateX(0)'
  }

  menuButtons.forEach((el) => el.addEventListener('click', toggleMenu))
}
