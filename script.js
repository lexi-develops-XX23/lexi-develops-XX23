var theme = ''

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
} else {
    theme = 'light'
}
let toggleMode = () => {
    if (theme === 'light') {
        theme = 'dark'
        document.body.style.backgroundColor = '#000'
        document.querySelectorAll("#bio")[0].style.color = '#dcb'

    } else {
        theme = 'light'
        document.body.style.backgroundColor = '#fff'
        document.querySelectorAll("#bio")[0].style.color = 'rgb(106, 99, 97)'
        console.log(document.querySelectorAll(".bio"));


    }
}
