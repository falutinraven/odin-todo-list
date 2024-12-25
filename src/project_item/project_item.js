import { TodoItem } from "../todo_item/todo_item";

export class Project{
  constructor(name, todoItems=[]){
    this.todoItems = todoItems,
    this.name = name
  }

  addTodoItem(todo_item){
    this.todoItems.push(todo_item);
  }
  
}