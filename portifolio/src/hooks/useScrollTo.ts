export const useScrollTo = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const navbarOffset = 64 // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return scrollTo
} 