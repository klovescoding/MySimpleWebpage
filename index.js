// Lesson 4.2

let today = new Date();
let thisYear = today.getFullYear();
let small = document.querySelector("small");
let copyright = document.createElement("p")

copyright.innerHTML = `Copyright &copy; ${thisYear} - My Webpage`
small.appendChild(copyright);
small.style.textAlign = "center";


let skills = [
    "HTML",
    "CSS",
    "Usability Testing",
    "Website Audit"
]

let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}


// Lesson 4.3

let messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener('submit', function (event) {
  
    let usersName = event.target.usersName
    let usersEmail = document.querySelector('[name="usersEmail"]')
    let usersMessage = document.querySelector('[name="usersMessage"]')
   
    event.preventDefault();
     console.log(usersName.value)
     console.log(usersEmail.value)
     console.log(usersMessage.value)
    
     let messageSection = document.getElementById("messages")
     let messageList = messageSection.querySelector("ul")
     let newMessage = document.createElement("li")
     newMessage.innerHTML = `<a href="mailto: ${usersEmail.value}">${usersName.value}</a> wrote: <span>${usersMessage.value}</span>`
     let removeButton = document.createElement("button")
     removeButton.innerHTML = `delete <input type="button">`
     removeButton.classList.add("removeButton")
   
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

     document.querySelector("form").reset()

     removeButton.addEventListener('click', function () {
        
        let entry= removeButton.parentNode;
        entry.remove();
              
   })});











