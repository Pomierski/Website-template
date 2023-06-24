import '@lottiefiles/lottie-player'
import AOS from 'aos'
import { handleMobileMenu } from './handleMobileMenu'
import { loadLottie } from './loadLottie'

AOS.init({
  disable: 'mobile',
  once: true,
  duration: 500,
})

handleMobileMenu()
loadLottie()
