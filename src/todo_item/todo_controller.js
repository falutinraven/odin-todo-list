import { Project } from "../project_item/project_item";
import { TodoItem } from "./todo_item";
import { compareAsc, format } from "date-fns";

let todo_form = function (){ // activate button to make form on press id like modal more actually
  let container = document.querySelector(".todo-form-container");
  let form = document.createElement("form")
}

export function displayProjectTasks (curr_project, project_index){
  let todo_container = document.querySelector('.todo-container');
  todo_container.innerHTML = "";

  for(let i = 0; i < curr_project.todoItems.length; i++){
    let element = curr_project.todoItems[i];
    let todo_item = document.createElement('div');
    todo_item.classList.add("task-container");
    todo_item.dataset.index = i;

    let title = document.createElement('p');
    title.textContent = element.title;
    todo_item.appendChild(title)

    let due_date = document.createElement('p');
    due_date.textContent = "due: " + format(element.dueDate, "yyyy-MM-dd");
    todo_item.appendChild(due_date)

    let description = document.createElement('p');
    description.textContent = "description: " + element.description;
    todo_item.appendChild(description);

    let priority = document.createElement('p');
    priority.textContent = "priority: " + element.priority;
    todo_item.appendChild(priority);

    let notes = document.createElement('p');
    notes.textContent = "notes: " + element.notes;
    todo_item.appendChild(notes);

    let complete = document.createElement('p');
    if (element.complete)
      complete.textContent = "task is complete";
    else
      complete.textContent = "task is not complete";
    todo_item.appendChild(complete);

    let delete_button = document.createElement('button');
    delete_button.textContent = "delete?"
    delete_button.classList.add('delete-task');
    delete_button.dataset.index = i;
    delete_button.dataset.projectIndex = project_index;

    todo_item.appendChild(delete_button);
    todo_container.appendChild(todo_item);
  }
}

export function deleteTaskListeners () {
  let delete_buttons = document.querySelectorAll(".delete-task");
  delete_buttons.forEach(delete_button => {
    delete_button.addEventListener('click', () => {
      delete_button.parentElement.innerHTML = "";
      window.projects[delete_button.dataset.projectIndex].todoItems.splice(delete_button.dataset.index, 1);
    })
  });
}