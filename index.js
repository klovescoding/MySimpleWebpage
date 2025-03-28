// Lesson 4.2

let today = new Date();
let thisYear = today.getFullYear();
let small = document.querySelector("small");
let copyright = document.createElement("p")

copyright.innerHTML = `Copyright &copy; ${thisYear} - My Website`
small.appendChild(copyright);
small.style.textAlign = "center";


let skills = [
    "HTML",
    "CSS",
    "Usability Testing",
    "Heuristic Evaluation"
]

let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}





