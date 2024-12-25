import { displayProjectTasks, deleteTaskListeners, addTaskButtonListener, submitTaskLogic } from "./todo_item/todo_controller";
import { displayProjects, addProjectButtonListener, submitProjectLogic } from "./project_item/project_controller";
import { Project } from "./project_item/project_item";
import { TodoItem } from "./todo_item/todo_item";
import "./todo_item/todo_item.css"

window.projects = [new Project('main', [new TodoItem('first', 'this is demo', new Date(), 1)])]
displayProjectTasks(window.projects[0], 0);
deleteTaskListeners();
addProjectButtonListener();
submitProjectLogic();
displayProjects();

addTaskButtonListener();
submitTaskLogic();