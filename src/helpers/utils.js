export const isDocumentDarkTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const setDocumentTheme = (theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
