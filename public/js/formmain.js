// image validation

// image validation
////////////////////////////////////////// image convert
let insertedimage = document.getElementById("image");
let convertedimage;

function imageconvert(element) {
    // jpg png checker
    let image = element.target;
    let file = image.files[0];
    if ((file.size < 100000 && file.type === "image/jpeg") || file.type === "image/jpg") {
        let reader = new FileReader();
        reader.onloadend = function () {
            convertedimage = reader.result;
        };
        reader.readAsDataURL(file);
        console.log(file);
    } else {
        insertedimage.value = "";
        alert("please select small size image or jpg");
    }
}
insertedimage.addEventListener("change", imageconvert);

////////////////////////////////////////// image convert end
////////////////////////////////////////////////// hobbies value

let Music = document.getElementById("music");
let Travel = document.getElementById("travel");
let Movie = document.getElementById("movie");
let Sports = document.getElementById("sports");
let Reading = document.getElementById("reading");

Music.value = "";
Travel.value = "";
Movie.value = "";
Sports.value = "";
Reading.value = "";

Music.addEventListener("click", () => {
    if (Music.checked) {
        Music.value = "Music";
    } else {
        Music.value = "";
    }
});

Travel.addEventListener("click", () => {
    if (Travel.checked) {
        Travel.value = "Travel";
    } else {
        Travel.value = "";
    }
});

Movie.addEventListener("click", () => {
    if (Movie.checked) {
        Movie.value = "Movie";
    } else {
        Movie.value = "";
    }
});

Sports.addEventListener("click", () => {
    if (Sports.checked) {
        Sports.value = "Sports";
    } else {
        Sports.value = "";
    }
});

Reading.addEventListener("click", () => {
    if (Reading.checked) {
        Reading.value = "Reading";
    } else {
        Reading.value = "";
    }
});

/////////////////////////////////////// hobbies value
///////////////////////////////////////////// form backend end

let form = document.getElementById("main-form");

form.addEventListener("submit", async (e) => {
    const formData = new FormData(form);
    e.preventDefault();

    //////////////////////////// stracture

    const username = document.getElementById("name");
    const address = document.getElementById("address");
    const email = document.getElementById("email");
    const dob = document.getElementById("dob");
    const pin = document.getElementById("pincode");
    const contact = document.getElementById("contact");
    const music = document.getElementById("music");
    const travel = document.getElementById("travel");
    const movie = document.getElementById("movie");
    const sports = document.getElementById("sports");
    const reading = document.getElementById("reading");
    const secrate_handle = document.getElementById("scerate_handle");
    const skillsarea = document.getElementById("sills-text-area");

    const hobbieslist = [
        `${music.value}`,
        `${travel.value}`,
        `${movie.value}`,
        `${sports.value}`,
        `${reading.value}`,
    ];

    const defaultFormData = {
        // size limit done
        image: convertedimage,
        secret_handle: `@${secrate_handle.value}`,
        name: `${username.value}`,
        address: `${address.value}`,
        email: `${email.value}`,
        dob: `${dob.value}`,
        pin: `${pin.value}`,
        contact: contact.value,
        skills: skillsarea.value,
        hobbies: hobbieslist,
        education: education,
        experince: experince,
        social: socialList,
        certificates: awards,
        testimonial: testimonialList,
    };

    try {
        let loder = document.getElementById("main-preloder");
        loder.style.zIndex = 10;
        setTimeout(() => {
            loder.style.zIndex = -10;
        }, 3000);

        window.scrollTo(0, 0);

        const formdataJson = JSON.stringify(defaultFormData);
        console.log(defaultFormData);

        const response = await fetch(`/api/profile/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: formdataJson,
        });

        await response.json();
        console.log(response);
        form.reset();
    } catch (e) {
        console.log(e);
        console.error("Server error try later");
    }
});
///////////////////////////////////////////// form backend end
/////////////////////////////////////// second page
///////////////////////////////// tables
const tbl = document.getElementById("table-body");
const Table = document.getElementById("table");
const addtbl = document.getElementById("button-wrap-inner");
const education = [];

// for error msg

let msg1 = document.getElementById("error-msg-1");
let msg2 = document.getElementById("error-msg-2");

// for error msg

function onAddwebSite(e) {
    e.preventDefault();
    const Degree = document.getElementById("degree").value;
    const Year = document.getElementById("year").value;
    const University = document.getElementById("university").value;
    // const School = document.getElementById("school").value;
    const Result = document.getElementById("result").value;
    const id = Date.now();

    if (education.length < 4) {
        tbl.innerHTML += `
        <tr id=${id}>
            <td>${Degree}</td>
            <td>${Year}</td>
            <td>${University}</td>
            <td>${Result}</td>
            <td class="remove">&#x2716;</td>
            </tr>`;
        }
        // <td>${School}</td>


    if (education.length < 4) {
        education.push({
            id: `${id}`,
            degree: `${Degree}`,
            year: `${Year}`,
            university: `${University}`,
            // school: `${School}`,
            result: `${Result}`,
        });
    }
}

addtbl.addEventListener("click", onAddwebSite);
Table.addEventListener("click", tableRemove);

function tableRemove(e) {
    if (!e.target.classList.contains("remove")) {
        return;
    }
    const btn = e.target;
    const closestElement = btn.closest("tr");
    
    closestElement.remove();
    const id = closestElement.id;

    education.splice(education.findIndex((value) => value.id === id));
}

// /////////////////////////////tables
///////////////////////////////// for second table

const tbl2 = document.getElementById("table-body2");
const Table2 = document.getElementById("table2");
const addtbl2 = document.getElementById("button-wrap-inner2");
const experince = [];

function onAddwebSite2(e) {
    e.preventDefault();
    const Year = document.getElementById("Year").value;
    const Organization = document.getElementById("Organization").value;
    const Designation = document.getElementById("Designation").value;
    const Subject = document.getElementById("Subject").value;
    const id = Date.now();

    if (experince.length < 4) {
        tbl2.innerHTML += `
        <tr id=${id}>
            <td>${Year}</td>
            <td>${Organization}</td>
            <td>${Designation}</td>
            <td>${Subject}</td>
            <td class="remove">&#x2716;</td>
        </tr>`;
    }

    if (experince.length < 4) {
        experince.push({
            id: `${id}`,
            year: `${Year}`,
            organization: `${Organization}`,
            designation: `${Designation}`,
            Subject: `${Subject}`,
        });
    }
}

addtbl2.addEventListener("click", onAddwebSite2);
Table2.addEventListener("click", tableRemove2);

function tableRemove2(e) {
    if (!e.target.classList.contains("remove")) {
        return;
    }
    const btn = e.target;
    const closestElement = btn.closest("tr");

    closestElement.remove();
    const id = closestElement.id;

    experince.splice(experince.findIndex((value) => value.id === id));
}

//////////////////////////////// for second table
///////////////////////////////// for handles table

// const handles = document.getElementById("handles");
// const handlers = document.getElementById("handlers");
// const addtbl3 = document.getElementById("Social-media-button");
const socialList = [];

// function DropHandlers(e){

//     e.preventDefault();
//     const SocialLinks = document.getElementById("text-area-hadlers").value;
//     const Dropdown = document.getElementById("drop-input").value;
//     const id = Date.now()

//     handles.innerHTML+=`
//     <tr id=${id}>
//         <td>${Dropdown}</td>
//         <td>${SocialLinks}</td>
//         <td class="remove">&#x2716;</td>
//     </tr>
//     `
//     socialList.push({
//         platform:`${Dropdown}`,
//         media:`${SocialLinks}`,
//     })
//     console.log(socialList);
// }
// addtbl3.addEventListener("click",DropHandlers);
// handlers.addEventListener("click",tableRemove3)

// function tableRemove3(e) {
//     if (!e.target.classList.contains("remove")){
//         return;
//     }
//     const btn = e.target;
//     const closestElement = btn.closest("tr");

//     closestElement.remove();
//     const id = closestElement.id;

//     socialList.splice(socialList.findIndex((value) => value.id === id));
//     console.log(socialList);

// }

/////////////////////////////////// for handles table
/////////////////////////////////// for awards table

const awardsButton = document.getElementById("Awards-button");
const awardbody = document.getElementById("awards-body");
const awardtable = document.getElementById("award-table");
const awards = [];

function awardsadd() {
    const awardyear = document.getElementById("first-award").value;
    const awardname = document.getElementById("second-award").value;
    const id = Date.now();

    awardbody.innerHTML += `
        <tr id=${id}>
        <td>${awardyear}</td>
        <td>${awardname}</td>
        <td class="remove">&#x2716;</td>
        </tr>
    `;
    awards.push({
        certificate_name: `${awardname}`,
        year: `${awardyear}`,
    });
}

awardsButton.addEventListener("click", awardsadd);
awardtable.addEventListener("click", awardClear);

function awardClear(e) {
    if (!e.target.classList.contains("remove")) {
        return;
    }
    const btn = e.target;
    const closestElement = btn.closest("tr");

    closestElement.remove();
    const id = closestElement.id;

    awards.splice(awards.findIndex((value) => value.id === id));
}

/////////////////////////////////// for awards table
///////////////////////////////// Testimonials toggle

const hide = document.getElementById("hide");
const sactionToggle = document.getElementById("testimonial-toggle-arrow");
const classtoggler = document.getElementById("testimonals1");
const classtoggler2 = document.getElementById("testimonals2");
const classtoggler3 = document.getElementById("testimonals3");
const testimonial = document.getElementById("tastimonial-container");
const testimonialButton = document.getElementById("testimonal-button");
const testimonialTable = document.getElementById("testimonial-table");
const testimonialBody = document.getElementById("testimonial-body");
const testimonialButtonwrap = document.getElementById("testimonal-button-wrap");
const testimonialList = [];

sactionToggle.addEventListener("click", () => {
    hide.classList.toggle("hide-active");
    testimonial.classList.toggle("tastimonial-active");
    testimonialButtonwrap.classList.toggle("tastimonial-active");
    setTimeout(() => {
        classtoggler.classList.toggle("testimonials-toggle");
    }, 300);
    setTimeout(() => {
        classtoggler2.classList.toggle("testimonials-toggle");
    }, 500);

    setTimeout(() => {
        classtoggler3.classList.toggle("testimonials-toggle");
    }, 700);
    setTimeout(() => {
        testimonialButton.classList.toggle("testimonials-toggle");
        testimonialTable.classList.toggle("testimonial-table-active");
    }, 900);
});

function testimonialadd() {
    const studentname = document.getElementById("testimonals1").value;
    const studentclass = document.getElementById("testimonals2").value;
    const forstudents = document.getElementById("testimonals3").value;
    const id = Date.now();

    testimonialBody.innerHTML += `
     <tr id=${id}>
        <td>${studentname}</td>
        <td>${studentclass}</td>
        <td>${forstudents}</td>
        <td class="remove">&#x2716;</td>
     </tr>
    `;
    testimonialList.push({
        student_name: `${studentname}`,
        student_class: `${studentclass}`,
        for_students: `${forstudents}`,
    });
}

testimonialButton.addEventListener("click", testimonialadd);
testimonialTable.addEventListener("click", testimonialClear);

function testimonialClear(e) {
    if (!e.target.classList.contains("remove")) {
        return;
    }
    const btn = e.target;
    const closestElement = btn.closest("tr");

    closestElement.remove();
    const id = closestElement.id;

    testimonialList.splice(testimonialList.findIndex((value) => value.id === id));
}

// Testimonials toggle
