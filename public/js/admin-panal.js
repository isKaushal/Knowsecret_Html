// for btn ui only
const check = document.querySelectorAll("#input");
const dot = document.querySelectorAll("#button-dot");
const label = document.querySelectorAll("#main-button");




dot.forEach((dot)=>{
    const peanut = dot.dataset.status
    if(peanut === "active"){
        dot.classList.add("translate-x-[18px]")
    }else if(peanut === "pending"){
        dot.classList.remove("translate-x-[18px]")
    }

    dot.addEventListener("click",(event)=>{
        let element = event.currentTarget

        element.classList.toggle("translate-x-[18px]")

        console.log(element);
        
    })

})

label.forEach((llb)=>{
    const peanut = llb.dataset.status
    if(peanut === "active"){
        llb.classList.add("bg-green-600")
    }else if(peanut === "pending"){
        llb.classList.remove("bg-green-600")
    }

    llb.addEventListener("click",(event)=>{
        let element = event.currentTarget

        element.classList.toggle("bg-green-600")

        console.log(element);
        
    })
})



// for btn active or pending api
const message = document.getElementById("message");
const active = document.getElementById("active");
const deactive = document.getElementById("deactive");

label.forEach((api)=>{
    try {
        api.addEventListener("click", async (event) =>{


            message.style.opacity = 1

            setTimeout(() => {
                message.style.opacity = 0
            }, 1500);

            const user  = event.currentTarget.dataset.userid
            let peanut = event.currentTarget.dataset.status

            if(peanut === "active"){
                peanut = "pending"
                deactive.classList.remove("hidden")
                setTimeout(() => {
                    deactive.classList.add("hidden")
                }, 3500);
                
            }else if(peanut === "pending"){
                peanut = "active"
                active.classList.remove("hidden")
                setTimeout(() => {
                    active.classList.add("hidden")
                }, 3500);
            }

            const stat = peanut

            const data = {
                "profileId":user,
                "status":stat
            }
            console.log(data);  
            const bodyjson = JSON.stringify(data)

            const updateapi = await fetch("/api/profile/update",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: bodyjson,
            });
            await updateapi.json();
        })

    } catch (error) {
        console.log(error);
        api.history.back()
        dot.forEach((dot)=>{
            dot.history.back()
        })   
    }
})


// for btn active or pending api
// for sidebar toggle

const total = document.getElementById("total");
const flex1 = document.getElementById("bgcolor");
const request = document.getElementById("request");
const flex2 = document.getElementById("bgcolor2");
const ls1 = document.getElementById("listname1");
const ls2 = document.getElementById("listname2");
const ls3 = document.getElementById("listname3");
const ls4 = document.getElementById("listname4");

const tileOne = document.getElementById("tile-one");
const tileTwo = document.getElementById("tile-two");

// tile changer
tileOne.classList.add("tile-changer")
tileTwo.classList.remove("tile-changer")
// tile changer

total.classList.add("text-black");
flex1.classList.add("bg-white");
ls1.classList.add("opacity-100")
ls2.classList.add("opacity-100")



total.addEventListener("click", () => {
    // curved element
    ls1.classList.add("opacity-100")
    ls2.classList.add("opacity-100")
    ls3.classList.remove("opacity-100")
    ls4.classList.remove("opacity-100")
    // curved element
    
    // for tile changer
    tileOne.classList.add("tile-changer")
    tileTwo.classList.remove("tile-changer")
    // for tile changer
    
    flex1.classList.add("bg-white");
    total.classList.add("text-black");
    request.classList.add("text-white");
    flex2.classList.remove("bg-white");
    request.classList.remove("text-black");
});

request.addEventListener("click", () => {
    // curved element
    ls3.classList.add("opacity-100")
    ls4.classList.add("opacity-100")
    ls1.classList.remove("opacity-100")
    ls2.classList.remove("opacity-100")
    // curved element

    // for tile changer
    tileTwo.classList.add("tile-changer")
    tileOne.classList.remove("tile-changer")
    // for tile changer

    flex2.classList.add("bg-white");
    request.classList.add("text-black");
    total.classList.add("text-white");
    flex1.classList.remove("bg-white")
    total.classList.remove("text-black");
});



// searchbar toggle
let seh = document.getElementById("search");

seh.addEventListener("click", () => {
    seh.style.width = "12rem";
});
seh.addEventListener("blur", () => {
    seh.style.width = "6.5rem";
});

//  fetch btn
const fat = document.getElementById("fetch-btn");
const fatContainer = document.getElementById("fetch-container");
// const ipaddress = "http://192.168.1.239:8080";
// const ipaddress = "https://api.testntrack.com";


fat.addEventListener("click", async () => {
    location.reload()
    // const resp = await fetch(`${ipaddress}/api/v1/knowsecret/profiles`);
    // console.log(resp);
});
//  fetch btn

// scarch bar

const search = document.getElementById("search");

function searchlist() {
    let input, filter, ul, li, item, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("fetch-container");
    li = ul.querySelectorAll("#name");

    for (i = 0; i < li.length; i++) {
        item = li[i];
        txtValue = item.textContent || item.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

search.addEventListener("change", searchlist);

// scarch bar
