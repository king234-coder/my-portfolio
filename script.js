// =====================
// LOAD PROJECTS FROM JSON
// =====================

fetch("projects.json")
.then(res => res.json())
.then(projects => {

    const container = document.getElementById("projects-container");

    projects.forEach(project => {

        container.innerHTML += `
        
        <div class="project-card">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <a href="${project.link}" target="_blank">
                View Project
            </a>

        </div>

        `;

    });

})
.catch(error => console.log("Projects Error:",error));


// =====================
// EMAILJS SETUP
// =====================

if(typeof emailjs !== "undefined"){

    emailjs.init("h0P7aOoSzMjcF2P4O");

}


// =====================
// CONTACT FORM
// =====================

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit",function(e){

    e.preventDefault();


    const params = {

        name:document.getElementById("name").value,

        email:document.getElementById("email").value,

        message:document.getElementById("message").value

    };


    emailjs.send(
        "service_7hyh6zu",
        "template_dinba4t",
        params
    )


    .then(()=>{

        alert("Message Sent Successfully ✅");

        contactForm.reset();

    })


    .catch(()=>{

        alert("Message Sending Failed ❌");

    });


});


// =====================
// TYPING EFFECT
// =====================

const typing = document.getElementById("typing");


const roles = [

"Frontend Web Developer",

"SEO Engineer",

"Graphic Designer",

"Video Editor",

"UI/UX Web Flow"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


let currentText = roles[roleIndex];


if(!deleting){

    typing.innerHTML = currentText.substring(0,charIndex++);


    if(charIndex > currentText.length){

        deleting = true;

        setTimeout(typeEffect,1500);

        return;

    }

}

else{

    typing.innerHTML = currentText.substring(0,charIndex--);


    if(charIndex === 0){

        deleting = false;

        roleIndex++;


        if(roleIndex >= roles.length){

            roleIndex = 0;

        }

    }

}


setTimeout(
    typeEffect,
    deleting ? 60 : 100
);


}


typeEffect();


// =====================
// ACTIVE NAV LINK
// =====================

const sections = document.querySelectorAll("section,header");

const links = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{


let current = "";


sections.forEach(section=>{


let top = section.offsetTop - 120;


if(window.scrollY >= top){

    current = section.id;

}


});



links.forEach(link=>{


link.classList.toggle(

"active",

link.getAttribute("href") === "#" + current

);


});


});


// =====================
// MOBILE MENU
// =====================

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");



menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});


document.querySelectorAll(".nav-links a")

.forEach(link=>{


link.addEventListener("click",()=>{

    navMenu.classList.remove("active");

});


});