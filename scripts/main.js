window.addEventListener("scroll", function() {
    let navbar = this.document.getElementById("header")
    let navBtn = this.document.getElementById("nav-btn")
    let scrolltop = this.document.getElementById("scrollup")
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "white"
        navBtn.style.backgroundColor = "#55a6c4"
        navBtn.style.color = "white"
        navBtn.style.border = "0px solid #ccc"
        scrolltop.style.display = "grid"
    } else {
        // Revert to the original color when not scrolled
        navbar.style.backgroundColor = "transparent"
        navBtn.style.backgroundColor = "transparent"
        navBtn.style.color = "#ccc"
        navBtn.style.border = "1px solid #ccc"
        scrolltop.style.display = "none"
    }
});

this.document.getElementById("scrollup").onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}