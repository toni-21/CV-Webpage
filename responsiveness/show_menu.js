const toggleButton = document.getElementsByClassName('nav_toggle')[0]
const navbarmenu = document.getElementsByClassName('nav_menu')[0]

toggleButton.addEventListener('click', () => {
    navbarmenu.classList.toggle('active')
})


const navlinks = document.querySelectorAll('.nav_link')

navlinks.forEach(n => n.addEventListener('click', () => {
    navbarmenu.classList.toggle('active')
}))

// let areaCV = document.getElementById('areaCV')

// const downloadButton = document.getElementsByClassName('home_profession')[0]
// downloadButton.addEventListener('click', () => {
//     html2pdf(areaCV)
// })
