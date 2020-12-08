const inputRef = document.querySelector('.theme-switch__toggle')
const savedDarkTheme = localStorage.getItem('dark')

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
inputRef.addEventListener('change', changeTheme)

function changeTheme(event) {
    const checkRef = event.target.checked
    
    if (checkRef) {
        localStorage.setItem('dark',checkRef )
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme') 
    } 
    if (!checkRef) {
        localStorage.removeItem('dark',checkRef )
        document.body.classList.remove('dark-theme') 
        document.body.classList.add('light-theme')
    }  
}

if (savedDarkTheme) {
    document.body.classList.add('dark-theme')
    inputRef.checked = true
} else {
    document.body.classList.add('light-theme')

}



