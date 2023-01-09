function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('ul li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('capage');
    }
})