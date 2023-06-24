import contentLottie from '../lottie/content.json'
import heroLottie from '../lottie/hero.json'
import supportLottie from '../lottie/support.json'
import userExperienceLottie from '../lottie/userExperience.json'

export const loadLottie = () => {
  const heroLottiePlayer = document.querySelector('#hero-lottie')
  heroLottiePlayer.setAttribute('src', JSON.stringify(heroLottie))

  const userExperienceLottiePlayer = document.querySelector(
    '#user-experience-lottie',
  )
  userExperienceLottiePlayer.setAttribute(
    'src',
    JSON.stringify(userExperienceLottie),
  )

  const contentLottiePlayer = document.querySelector('#content-lottie')
  contentLottiePlayer.setAttribute('src', JSON.stringify(contentLottie))

  const supportLottiePlayer = document.querySelector('#support-lottie')
  supportLottiePlayer.setAttribute('src', JSON.stringify(supportLottie))
}
