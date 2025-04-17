import { ThemesEnum } from './enums'

export const getDefaultTheme = () => {
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  return isDarkTheme ? ThemesEnum.DARK : ThemesEnum.LIGHT
}

export const setDocumentTheme = (theme) => {
  if (theme === ThemesEnum.DARK) {
    document.documentElement.classList.add(ThemesEnum.DARK)
  } else {
    document.documentElement.classList.remove(ThemesEnum.DARK)
  }
}
