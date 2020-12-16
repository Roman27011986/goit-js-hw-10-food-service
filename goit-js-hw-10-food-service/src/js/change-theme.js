const inputRef = document.querySelector('.theme-switch__toggle')
const savedDarkTheme = localStorage.getItem('theme')
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
inputRef.addEventListener('change', changeTheme)

function changeTheme(event) {
    const checkRef = event.target.checked
     
    if (checkRef) {
        localStorage.setItem('theme',theme.DARK )
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme') 
        inputRef.checked = true
        
    } 
    if (!checkRef) {
        localStorage.removeItem('theme', theme.DARK)
        localStorage.setItem('theme',theme.LIGHT)
        document.body.classList.remove('dark-theme') 
        document.body.classList.add('light-theme')
         
    } 
    
   
}




if (savedDarkTheme === theme.DARK) {
    document.body.classList.add('dark-theme')
    inputRef.checked = true
} else  {
    document.body.classList.add('light-theme')

}






