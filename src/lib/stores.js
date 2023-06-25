import { writable } from 'svelte/store'

function createTheme() {
  const { subscribe, update } = writable('light')
  function toggle() {
    update(theme => {
      if (theme === 'light') {
        document.documentElement.classList.add('dark')
        return 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        return 'light'
      }
    })
  }
  return {
    subscribe,
    toggle
  }
}

export const theme = createTheme()
