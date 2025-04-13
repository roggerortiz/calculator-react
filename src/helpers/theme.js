import { themesEnum } from './enums'

export const isDocumentDarkTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const setDocumentTheme = (theme) => {
  if (theme === themesEnum.dark) {
    document.documentElement.classList.add(themesEnum.dark)
  } else {
    document.documentElement.classList.remove(themesEnum.dark)
  }
}
