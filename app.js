const navlinks = document.querySelectorAll(".navbar-item ul li")
const menubtn = document.querySelector(".mobile-menu-btn")
const mobilemenu = document.querySelector(".nav-menu")
const mobilemenulink = document.querySelectorAll(".nav-menu ul li")

menubtn.addEventListener("click",()=>{
    menubtn.classList.toggle("active")
    mobilemenu.classList.toggle("active-menu")
    if(menubtn.classList.contains("active-btn")){
     icon.src="./icon-close-menu.svg"
    }else{
     icon.src = "./icon-menu.svg"
    }
 });
 navlinks.forEach((link)=>{
     const submenu = link.querySelector(".sub-menu")
     link.addEventListener("click",()=>{
         link.classList.toggle("active")
         submenu.classList.toggle("active-menu")
     })
 })
 mobilemenulink.forEach((link)=>{
     const submenu = link.querySelector(".mobile-sub")
     link.addEventListener("click",()=>{
         link.classList.toggle("active")
         submenu.classList.toggle("active-menu")
     })
 })