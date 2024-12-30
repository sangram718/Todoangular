import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList:any=[

  ]
  addTodo(taskName: any){
    this.todoList.push({"id":this.todoList.length+1,'task':taskName})
  }
  removeTodo(id: number){
    this.todoList.splice(id,1);
  }
  constructor() { }
}
