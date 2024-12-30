import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

constructor(private ts:TodoService){

}
todos: any;
ngOnInit(): void{
  this.todos=this.ts.todoList;
}

deleteTask(index:any){
  this.ts.removeTodo(index);
}

}
