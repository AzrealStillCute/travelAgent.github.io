const navBar = document.getElementById("navBar")

document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navBar.classList.add("onScroll")
    } else {
        navBar.classList.remove("onScroll")
    }
})

const menuIcon = document.getElementById("menuIcon")
const menuBar = document.getElementById("menuBar")

menuIcon.addEventListener("click", ()=> {
    if(menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars")
        menuIcon.classList.add("fa-xmark")
        menuBar.style.right = "0"
    } else {
        menuIcon.classList.add("fa-bars")
        menuIcon.classList.remove("fa-xmark")
        menuBar.style.right = "-140px"
    }

})

