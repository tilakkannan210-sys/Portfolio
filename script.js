import { techSkills, professionalSkills, ToolsAndTechnologies, myProjects } from "./data.js";

const sidebar = document.querySelector(".sidebar");
const navMenu = document.querySelector(".nav-links");
const techSkillContainer = document.querySelector(".tech-skill-group");
const proSkillContainer = document.querySelector(".pro-skill-group");
const ttContainer = document.querySelector(".tt")
const viewSkillsBtn = document.getElementById("viewSkillsBtn");
const myProjectsDisplay = document.querySelector(".projectsgrid");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a")
const viewWorkBtn = document.getElementById("viewworkbtn");
const contactMeBtn = document.getElementById("contactmebtn");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    })


})

sidebar.addEventListener('click', () => {
    navMenu.classList.toggle("show");
})

techSkillContainer.innerHTML = "";
proSkillContainer.innerHTML = "";
ttContainer.innerHTML = "";
myProjectsDisplay.innerHTML = "";

techSkills.forEach(skill => {
    techSkillContainer.innerHTML += `
      <div class="skill-header">
        <p>${skill.name}</p>
        <p>${skill.percentage}%</p>
      </div>
        <div class="skill-bar">
            <div class="skills-progress" style="width:${skill.percentage}%"></div>
        </div>
    `
})

professionalSkills.forEach(skill => {
    proSkillContainer.innerHTML += `
     <div class="skill-header">
        <p>${skill.name}</p>
        <p>${skill.percentage}%</p>
    </div>
     <div class="skill-bar">
       <div class="skills-progress" style="width:${skill.percentage}%"></div>
    </div>
    `
})

ToolsAndTechnologies.forEach(TT => {
    ttContainer.innerHTML += `
    <div class="ttcontainer">
      <img src="${TT.logo}" alt="${TT.name}">
      <p>${TT.name}</p>
      </div>
    `
})

viewSkillsBtn.addEventListener("click", () => {
    document.getElementById("skills").scrollIntoView({
        behavior: "smooth"
    });
});

myProjects.forEach(project => {
    myProjectsDisplay.innerHTML += `
      <div class="myprojectscontainer">
            <img src="${project.img}">
            <div class="projectsdetails">
                <h2>${project.name}</h2>
                    <p>${project.description}</p>
                    <div class="projectscodes">
                     ${project.codes.map(code => `
                         <div>${code}</div>
                        `
    ).join("")
        }
                    </div>
                    <div class="projectslinks">
                        <a href="${project.previewLink}"><i class="bi bi-box-arrow-up-right"></i> Live Demo</a>
                         <a href="${project.github}"><i class="bi bi-github"></i> Code</a>
                     </div>
                    </div>
                </div>
    `
})

viewWorkBtn.addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    })
})

contactMeBtn.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    })
})