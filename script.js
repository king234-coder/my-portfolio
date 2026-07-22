// ===============================
// LOAD PROJECTS FROM JSON
// ===============================

fetch("projects.json")
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("projects-container");

    // Prevent duplicate render
    container.innerHTML = "";

    data.forEach(project => {

      container.innerHTML += `
        <div class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      `;

    });

  })
  .catch(err => console.log("Project Load Error:",err));


// ===============================
// EMAILJS SAFE INIT
// ===============================

(function(){

  if(typeof emailjs !== "undefined"){

    emailjs.init("h0P7aOoSzMjcF2P4O");

  }

})();


// ===============================
// CONTACT FORM
// ===============================

document.getElementById("contactForm")
.addEventListener("submit",function(e){

  e.preventDefault();

  const params={

    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value

  };


  emailjs.send("service_7hyh6zu","template_dinba4t",params)

  .then(()=>{

    alert("Message Sent Successfully ✅");

    // Reset form
    document.getElementById("contactForm").reset();

  })

  .catch(()=>{

    alert("Error Sending Message ❌");

  });

});


// ===============================
// TYPING EFFECT
// ===============================

const textElement=document.getElementById("typing");

const roles=[
  "Frontend Web Developer",
  "SEO Engineer",
  "Graphic Designer",
  "Video Editor",
  "UI/UX Web Flow"
];

let i=0;
let j=0;
let isDeleting=false;
let isWelcomeDone=false;

const welcomeText="Welcome to my Portfolio";

const typingSpeed=100;
const deletingSpeed=50;
const delayBetween=1500;


function typeEffect(){

  if(!isWelcomeDone){

    if(!isDeleting && j<=welcomeText.length){

      textElement.innerHTML=welcomeText.substring(0,j++);
      setTimeout(typeEffect,typingSpeed);

    }
    else if(isDeleting && j>=0){

      textElement.innerHTML=welcomeText.substring(0,j--);
      setTimeout(typeEffect,deletingSpeed);

    }
    else{

      isDeleting=!isDeleting;

      if(!isDeleting){

        isWelcomeDone=true;
        j=0;

      }

      setTimeout(typeEffect,delayBetween);

    }

  }
  else{

    let fullText=roles[i];

    if(!isDeleting && j<=fullText.length){

      textElement.innerHTML=fullText.substring(0,j++);
      setTimeout(typeEffect,typingSpeed);

    }
    else if(isDeleting && j>=0){

      textElement.innerHTML=fullText.substring(0,j--);
      setTimeout(typeEffect,deletingSpeed);

    }
    else{

      isDeleting=!isDeleting;

      if(!isDeleting){

        i=(i+1)%roles.length;

      }

      setTimeout(typeEffect,delayBetween);

    }

  }

}


// Start Typing
typeEffect();


// ===============================
// ACTIVE NAV LINK
// ===============================

const sections=document.querySelectorAll("section,header");
const navLinks=document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{

  let current="";


  sections.forEach(section=>{

    const sectionTop=section.offsetTop-120;

    if(window.scrollY>=sectionTop){

      current=section.id;

    }

  });


  navLinks.forEach(link=>{

    link.classList.toggle(
      "active",
      link.getAttribute("href")==="#"+current
    );

  });

});


// ===============================
// MOBILE NAVBAR MENU
// ===============================

const menuBtn=document.querySelector(".menu-btn");
const navLinksMobile=document.querySelector(".nav-links");


// Open / Close Menu

menuBtn.addEventListener("click",()=>{

  navLinksMobile.classList.toggle("active");

});


// Close Menu After Click

document.querySelectorAll(".nav-links a")
.forEach(link=>{

  link.addEventListener("click",()=>{

    navLinksMobile.classList.remove("active");

  });

});