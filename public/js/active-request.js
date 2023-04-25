const links = document.getElementById("contact-us-container");
const svg = document.getElementById("svg");

svg.addEventListener("mouseenter",()=>{
    links.classList.add("contact-active");
})

svg.addEventListener("mouseleave",()=>{
    links.classList.remove("contact-active");
})

links.addEventListener("mouseenter",()=>{
    links.classList.add("contact-active");
})

links.addEventListener("mouseleave",()=>{
    links.classList.remove("contact-active");
})