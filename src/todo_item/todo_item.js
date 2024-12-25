export class TodoItem {
  constructor(title, description, dueDate, priority, notes='', complete=false){
    this.title = title,
    this.description = description,
    this.dueDate = dueDate,
    this.priority = priority,
    this.notes = notes,
    this.complete = complete
  }
}