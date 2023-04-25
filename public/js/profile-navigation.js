// for refresh DOM

// const body = document.getElementById("body")
// window.addEventListener("resize",()=>{
//     location.reload()
// })


// width.addEventListener("change",()=>{
//     location.reload();
// })

// function refresh() {
//     console.log("hello");
// }


// for refresh DOM

// Navbar components
const crousel = document.getElementById("custome-owl");
const NavBar = document.getElementById("navigation");
const NavImage = document.getElementById("navImage");
const isimageWrap = document.getElementById("main-navigation-wrap");
const NavImageWrap = document.getElementById("navigation-image-wrap");
const NavName = document.getElementById("navigation-name");
const DownloadCVwrap = document.getElementById("DownloadCV-button-wrap");
const NavButton = document.getElementById("nav-button");
const NavigationButton = document.getElementById("navigation-button");
const NavButtonsWrap = document.querySelectorAll("#navigation-buttons");
const NavAllIcons = document.querySelectorAll(".navigation-icons");
const NavAllIconsWrap = document.querySelectorAll("#navigation-button-wrap");
const navigationicons = document.getElementById("navigation-icons");
const navExpanded = true;
// Navbar components
// Titles
const HomeTitle = document.querySelectorAll("#hometitle");
const UserTitle = document.querySelectorAll("#usertitle");
const EducationTitle = document.querySelectorAll("#clipbordtitle");
const ExperienceTitle = document.querySelectorAll("#Experience");
const testimonanalTitle = document.querySelectorAll("#openbooktitle");
const ContactTitle = document.querySelectorAll("#locationtitle");
// Titles
// main tile components

const CenterContentWrap = document.getElementById("center-tiles-wrap");
const CenterTile1 = document.getElementById("MainTile1");
const CenterTile2 = document.getElementById("MainTile2");
const CenterTile3 = document.getElementById("MainTile3");
const CenterTile4 = document.getElementById("MainTile4");
const CenterTile5 = document.getElementById("MainTile5");
const CenterTile6 = document.getElementById("MainTile6");
// main tile components
// nav buttons click
// for active classlist

CenterTile1.classList.add("active");
HomeTitle.forEach((hom)=>{
    hom.classList.add("nav-titles-hover");
})

// for active classlist
// and animations

if (window.innerWidth >= 1024) {
    NavButtonsWrap.forEach((buttons) => {
        buttons.addEventListener("click", (event) => {
            const element = event.target.parentNode;
            if (element.id === "home") {
                // for tiles
                CenterTile1.classList.add("active");
                CenterTile2.classList.remove("active");
                CenterTile3.classList.remove("active");
                CenterTile4.classList.remove("active");
                CenterTile5.classList.remove("active");
                CenterTile6.classList.remove("active");
                // for tiles
                // for navbar
                navExpended();
                HomeTitle.forEach((hom)=>{
                    hom.classList.add("nav-titles-hover");
                })
                UserTitle.forEach((use)=>{
                    use.classList.remove("nav-titles-hover");
                })
                EducationTitle.forEach((edu)=>{
                    edu.classList.remove("nav-titles-hover");
                })
                ExperienceTitle.forEach((exp)=>{
                    exp.classList.remove("nav-titles-hover");
                })
                testimonanalTitle.forEach((tes)=>{
                    tes.classList.remove("nav-titles-hover");
                })
                ContactTitle.forEach(con=> {
                    con.classList.remove("nav-titles-hover");
                });
                // for navbar
            }

            if (element.id === "user") {
                // for tiles
                CenterTile1.classList.remove("active");
                CenterTile2.classList.add("active");
                CenterTile3.classList.remove("active");
                CenterTile4.classList.remove("active");
                CenterTile5.classList.remove("active");
                CenterTile6.classList.remove("active");
                // for tiles
                // for navbar
                navcollapse();
                HomeTitle.forEach((hom)=>{
                    hom.classList.remove("nav-titles-hover");
                })
                UserTitle.forEach((use)=>{
                    use.classList.add("nav-titles-hover");
                })
                EducationTitle.forEach((edu)=>{
                    edu.classList.remove("nav-titles-hover");
                })
                ExperienceTitle.forEach((exp)=>{
                    exp.classList.remove("nav-titles-hover");
                })
                testimonanalTitle.forEach((tes)=>{
                    tes.classList.remove("nav-titles-hover");
                })
                ContactTitle.forEach(con=> {
                    con.classList.remove("nav-titles-hover");
                });
                // for navbar
            }

            if (element.id === "Education") {
                // for tiles
                CenterTile1.classList.remove("active");
                CenterTile2.classList.remove("active");
                CenterTile3.classList.add("active");
                CenterTile4.classList.remove("active");
                CenterTile5.classList.remove("active");
                CenterTile6.classList.remove("active");
                // for tiles
                // for navbar
                navcollapse();
                HomeTitle.forEach((hom)=>{
                    hom.classList.remove("nav-titles-hover");
                })
                UserTitle.forEach((use)=>{
                    use.classList.remove("nav-titles-hover");
                })
                EducationTitle.forEach((edu)=>{
                    edu.classList.add("nav-titles-hover");
                })
                ExperienceTitle.forEach((exp)=>{
                    exp.classList.remove("nav-titles-hover");
                })
                testimonanalTitle.forEach((tes)=>{
                    tes.classList.remove("nav-titles-hover");
                })
                ContactTitle.forEach(con=> {
                    con.classList.remove("nav-titles-hover");
                });
                // for navbar
            }

            if (element.id === "Experience") {
                // for tiles
                CenterTile1.classList.remove("active");
                CenterTile2.classList.remove("active");
                CenterTile3.classList.remove("active");
                CenterTile4.classList.add("active");
                CenterTile5.classList.remove("active");
                CenterTile6.classList.remove("active");
                // for tiles
                // for navbar
                navcollapse();
                HomeTitle.forEach((hom)=>{
                    hom.classList.remove("nav-titles-hover");
                })
                UserTitle.forEach((use)=>{
                    use.classList.remove("nav-titles-hover");
                })
                EducationTitle.forEach((edu)=>{
                    edu.classList.remove("nav-titles-hover");
                })
                ExperienceTitle.forEach((exp)=>{
                    exp.classList.add("nav-titles-hover");
                })
                testimonanalTitle.forEach((tes)=>{
                    tes.classList.remove("nav-titles-hover");
                })
                ContactTitle.forEach(con=> {
                    con.classList.remove("nav-titles-hover");
                });
                // for navbar
            }

            if (element.id === "openbook") {
                // for tiles
                CenterTile1.classList.remove("active");
                CenterTile2.classList.remove("active");
                CenterTile3.classList.remove("active");
                CenterTile4.classList.remove("active");
                CenterTile5.classList.add("active");
                CenterTile6.classList.remove("active");
                // for tiles
                // for navbar
                navcollapse();
                HomeTitle.forEach((hom)=>{
                    hom.classList.remove("nav-titles-hover");
                })
                UserTitle.forEach((use)=>{
                    use.classList.remove("nav-titles-hover");
                })
                EducationTitle.forEach((edu)=>{
                    edu.classList.remove("nav-titles-hover");
                })
                ExperienceTitle.forEach((exp)=>{
                    exp.classList.remove("nav-titles-hover");
                })
                testimonanalTitle.forEach((tes)=>{
                    tes.classList.add("nav-titles-hover");
                })
                ContactTitle.forEach(con=> {
                    con.classList.remove("nav-titles-hover");
                });
                // for navbar
            }

            if (element.id === "location") {
                const hired = document.getElementById("GET-HIRED-TEXT");
                const touch = document.getElementById("GET-IN-TOUCH");
                touch.style.display = "block"
                hired.style.display = "none"

                // for tiles
                CenterTile1.classList.remove("active");
                CenterTile2.classList.remove("active");
                CenterTile3.classList.remove("active");
                CenterTile4.classList.remove("active");
                CenterTile5.classList.remove("active");
                CenterTile6.classList.add("active");
                // for tiles
                // for navbar
                navExpended();
                HomeTitle.forEach((hom)=>{
                    hom.classList.remove("nav-titles-hover");
                })
                UserTitle.forEach((use)=>{
                    use.classList.remove("nav-titles-hover");
                })
                EducationTitle.forEach((edu)=>{
                    edu.classList.remove("nav-titles-hover");
                })
                ExperienceTitle.forEach((exp)=>{
                    exp.classList.remove("nav-titles-hover");
                })
                testimonanalTitle.forEach((tes)=>{
                    tes.classList.remove("nav-titles-hover");
                })
                ContactTitle.forEach(con=> {
                    con.classList.add("nav-titles-hover");
                });
                // for navbar
            }
        });
    });
} else {
    NavButtonsWrap.forEach((buttons) => {
        buttons.addEventListener("click", (event) => {
            const element = event.target.parentNode;

            if (element.id === "home") {
                // for tiles
                CenterTile1.classList.add("active");
                CenterTile2.classList.remove("active");
                CenterTile3.classList.remove("active");
                CenterTile4.classList.remove("active");
                CenterTile5.classList.remove("active");
                CenterTile6.classList.remove("active");
                // for tiles
                // for navbar
                mobileNav.classList.remove("dropdown-active");
                // for navbar
                // for navbar
                HomeTitle.forEach((hom)=>{
                    hom.classList.add("nav-titles-hover");
                })
                UserTitle.forEach((use)=>{
                    use.classList.remove("nav-titles-hover");
                })
                EducationTitle.forEach((edu)=>{
                    edu.classList.remove("nav-titles-hover");
                })
                ExperienceTitle.forEach((exp)=>{
                    exp.classList.remove("nav-titles-hover");
                })
                testimonanalTitle.forEach((tes)=>{
                    tes.classList.remove("nav-titles-hover");
                })
                ContactTitle.forEach(con=> {
                    con.classList.remove("nav-titles-hover");
                });
                // for navbar
            }

            if (element.id === "user") {
                // for tiles
                CenterTile1.classList.remove("active");
                CenterTile2.classList.add("active");
                CenterTile3.classList.remove("active");
                CenterTile4.classList.remove("active");
                CenterTile5.classList.remove("active");
                CenterTile6.classList.remove("active");
                // for tiles
                // for navbar
                mobileNav.classList.remove("dropdown-active");
                // for navbar
                // for navbar
                HomeTitle.forEach((hom)=>{
                    hom.classList.remove("nav-titles-hover");
                })
                UserTitle.forEach((use)=>{
                    use.classList.add("nav-titles-hover");
                })
                EducationTitle.forEach((edu)=>{
                    edu.classList.remove("nav-titles-hover");
                })
                ExperienceTitle.forEach((exp)=>{
                    exp.classList.remove("nav-titles-hover");
                })
                testimonanalTitle.forEach((tes)=>{
                    tes.classList.remove("nav-titles-hover");
                })
                ContactTitle.forEach(con=> {
                    con.classList.remove("nav-titles-hover");
                });
                // for navbar
            }

            if (element.id === "Education") {
                // for tiles
                CenterTile1.classList.remove("active");
                CenterTile2.classList.remove("active");
                CenterTile3.classList.add("active");
                CenterTile4.classList.remove("active");
                CenterTile5.classList.remove("active");
                CenterTile6.classList.remove("active");
                // for tiles
                // for navbar
                mobileNav.classList.remove("dropdown-active");
                // for navbar
                // for navbar
                HomeTitle.forEach((hom)=>{
                    hom.classList.remove("nav-titles-hover");
                })
                UserTitle.forEach((use)=>{
                    use.classList.remove("nav-titles-hover");
                })
                EducationTitle.forEach((edu)=>{
                    edu.classList.add("nav-titles-hover");
                })
                ExperienceTitle.forEach((exp)=>{
                    exp.classList.remove("nav-titles-hover");
                })
                testimonanalTitle.forEach((tes)=>{
                    tes.classList.remove("nav-titles-hover");
                })
                ContactTitle.forEach(con=> {
                    con.classList.remove("nav-titles-hover");
                });
                // for navbar
            }

            if (element.id === "Experience") {
                // for tiles
                CenterTile1.classList.remove("active");
                CenterTile2.classList.remove("active");
                CenterTile3.classList.remove("active");
                CenterTile4.classList.add("active");
                CenterTile5.classList.remove("active");
                CenterTile6.classList.remove("active");
                // for tiles
                // for navbar
                mobileNav.classList.remove("dropdown-active");
                // for navbar
                // for navbar
                HomeTitle.forEach((hom)=>{
                    hom.classList.remove("nav-titles-hover");
                })
                UserTitle.forEach((use)=>{
                    use.classList.remove("nav-titles-hover");
                })
                EducationTitle.forEach((edu)=>{
                    edu.classList.remove("nav-titles-hover");
                })
                ExperienceTitle.forEach((exp)=>{
                    exp.classList.add("nav-titles-hover");
                })
                testimonanalTitle.forEach((tes)=>{
                    tes.classList.remove("nav-titles-hover");
                })
                ContactTitle.forEach(con=> {
                    con.classList.remove("nav-titles-hover");
                });
                // for navbar
            }

            if (element.id === "openbook") {
                // for tiles
                CenterTile1.classList.remove("active");
                CenterTile2.classList.remove("active");
                CenterTile3.classList.remove("active");
                CenterTile4.classList.remove("active");
                CenterTile5.classList.add("active");
                CenterTile6.classList.remove("active");
                // for tiles
                // for navbar
                mobileNav.classList.remove("dropdown-active");
                // for navbar
                // for navbar
                HomeTitle.forEach((hom)=>{
                    hom.classList.remove("nav-titles-hover");
                })
                UserTitle.forEach((use)=>{
                    use.classList.remove("nav-titles-hover");
                })
                EducationTitle.forEach((edu)=>{
                    edu.classList.remove("nav-titles-hover");
                })
                ExperienceTitle.forEach((exp)=>{
                    exp.classList.remove("nav-titles-hover");
                })
                testimonanalTitle.forEach((tes)=>{
                    tes.classList.add("nav-titles-hover");
                })
                ContactTitle.forEach(con=> {
                    con.classList.remove("nav-titles-hover");
                });
                // for navbar
            }

            if (element.id === "location") {
                // for tiles
                CenterTile1.classList.remove("active");
                CenterTile2.classList.remove("active");
                CenterTile3.classList.remove("active");
                CenterTile4.classList.remove("active");
                CenterTile5.classList.remove("active");
                CenterTile6.classList.add("active");
                // for tiles
                // for navbar
                mobileNav.classList.remove("dropdown-active");
                // for navbar
                // for navbar
                HomeTitle.forEach((hom)=>{
                    hom.classList.remove("nav-titles-hover");
                })
                UserTitle.forEach((use)=>{
                    use.classList.remove("nav-titles-hover");
                })
                EducationTitle.forEach((edu)=>{
                    edu.classList.remove("nav-titles-hover");
                })
                ExperienceTitle.forEach((exp)=>{
                    exp.classList.remove("nav-titles-hover");
                })
                testimonanalTitle.forEach((tes)=>{
                    tes.classList.remove("nav-titles-hover");
                })
                ContactTitle.forEach(con=> {
                    con.classList.add("nav-titles-hover");
                });
                // for navbar
            }
        });
    });
}

if (window.innerWidth >= 1023) {
    NavAllIconsWrap.forEach((button) => {
        button.classList.add("grid-cols-3");
    });
} else {
    NavAllIconsWrap.forEach((button) => {
        button.classList.remove("grid-cols-3");
    });
}

const mobileNav = document.getElementById("navigation-buttons");
const NavToggleButton = document.getElementById("small-nav-button");
// mobile navbar drop down
function NavToggle() {
    if (window.innerWidth < 1024) {
        mobileNav.classList.toggle("dropdown-active");
    }
}

NavToggleButton.addEventListener("click",NavToggle);

// mobile navbar drop down

function navExpended() {
    var tl = gsap.timeline();
    tl.to(".gsap1", { x: -450, stagger: 0.1 });
    tl.to(".gsap2", { x: 350, stagger: -0.1 }, "<");
    tl.to(".gsap1", { x: 0, delay: 0.9, stagger: -0.1, opacity: 1 });
    tl.to(".gsap2", { x: 0, stagger: 0.1, opacity: 1 }, "<");

    setTimeout(() => {
        isimageWrap.style.width = "11rem";
        isimageWrap.style.height = "11rem";
        NavName.style.height = "3rem";
        NavImage.style.width = "11rem";
        NavImageWrap.style.height = "65%";
        DownloadCVwrap.style.height = "3.5rem";

        if (window.innerWidth >= 1024) {
            CenterContentWrap.style.width = "40rem";
            NavName.style.fontSize = "1.5rem";
            NavAllIcons.forEach((button) => {
                button.classList.add("p-4");
                button.classList.remove("py-3.5");
            });
        }
        if (window.innerWidth >= 1280) {
            CenterContentWrap.style.width = "50rem";
            NavName.style.fontSize = "1.875rem";
            NavAllIcons.forEach((button) => {
                button.classList.add("p-4");
                button.classList.remove("py-3.5");
            });
        }
        if (window.innerWidth >= 1536) {
            CenterContentWrap.style.width = "61rem";
            NavName.style.fontSize = "1.875rem";
            NavAllIcons.forEach((button) => {
                button.classList.add("p-4");
                button.classList.remove("py-5");
            });
        }

        NavBar.style.width = "20rem";
    }, 1000);
    setTimeout(() => {
        NavAllIconsWrap.forEach((button) => {
            button.classList.add("grid-cols-3");
        });
        NavigationButton.style.opacity = "1";
        NavName.style.opacity = "1";
    }, 1500);
}

function navcollapse() {
    const down = "50";

    var tl = gsap.timeline();
    tl.to(".gsap1", { opacity: 0 });
    tl.to(".gsap2", { opacity: 0 }, "<");
    tl.to(".gsap1", { y: down });
    tl.to(".gsap2", { y: down });
    tl.to(".gsap1", { y: 0, stagger: 0.2, opacity: 1 });
    tl.to(".gsap2", { y: 0, delay:0.6, stagger: 0.2, opacity: 1 },"<");

    NavigationButton.style.opacity = "0";
    NavName.style.opacity = "0";
    setTimeout(() => {
        if (window.innerWidth >= 1024) {
            NavAllIcons.forEach((button) => {
                button.classList.remove("p-4");
                button.classList.add("py-2.5");
            });
            CenterContentWrap.style.width = "50rem";
        }
        if (window.innerWidth >= 1280) {
            NavAllIcons.forEach((button) => {
                button.classList.remove("p-4");
                button.classList.add("py-3.5");
            });
            CenterContentWrap.style.width = "68rem";
        }
        if (window.innerWidth >= 1536) {
            NavAllIcons.forEach((button) => {
                button.classList.remove("p-4");
                button.classList.add("py-5");
            });
            CenterContentWrap.style.width = "80rem";
        }
        isimageWrap.style.width = "4rem";
        isimageWrap.style.height = "4rem";
        NavBar.style.width = "5.5rem";
        NavImage.style.width = "4rem";
        NavImageWrap.style.height = "23%";
    }, 1000);
    setTimeout(() => {
        NavAllIconsWrap.forEach((button) => {
            button.classList.remove("grid-cols-3");
        });
    }, 1500);
}


////////////////////////////////////// GET HIRED
// button
const get = document.getElementById("GET-HIRED");
// button
// headings
const touch = document.getElementById("GET-IN-TOUCH");
const hired = document.getElementById("GET-HIRED-TEXT");
// headings

get.addEventListener("click",()=>{
    hired.style.display = "block"
    touch.style.display = "none"
    CenterTile2.classList.remove("active");
    CenterTile6.classList.add("active");
    UserTitle.forEach((use)=>{
        use.classList.remove("nav-titles-hover");
    })
    ContactTitle.forEach(con=> {
        con.classList.add("nav-titles-hover");
    })
    navExpended()
})

////////////////////////////////////////// GET HIRED
