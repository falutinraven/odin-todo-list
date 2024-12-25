import { Project } from "./project_item";

function addProject(name){
  window.projects.push(new Project(name))
}

export function addProjectButtonListener(){
  let project = document.querySelector(".new-project");
  const dialog = document.querySelector('#dialog');
  project.addEventListener("click", () => {
    dialog.showModal();
  })
}

export function submitProjectLogic(){
  const submit = document.querySelector('#form-submit');
  submit.addEventListener('click', (event) =>{
    event.preventDefault();
    const dialog = document.querySelector('#dialog');
    const project_name = document.querySelector('#project-name-input');
    if(project_name.value){
      addProject(project_name.value);
      project_name.value = '';
      displayProjects();
    }
    dialog.close();
  })
}

export function displayProjects(){
  let container = document.querySelector('.projects-container');
  container.innerHTML = "";
  let select_element = document.createElement('select');
  select_element.classList.add('project-select')
  for (var i = 0; i < window.projects.length; i++){
    let curr_project = document.createElement('option');
    curr_project.value = window.projects[i].name;
    curr_project.textContent = window.projects[i].name
    select_element.appendChild(curr_project);
  }
  container.appendChild(select_element);
}
