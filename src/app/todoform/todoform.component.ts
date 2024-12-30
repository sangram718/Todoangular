import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {
  taskInput:any="";

  constructor(private ts:TodoService){

  }

  addTask(){
    this.ts.addTodo(this.taskInput);
    this.taskInput = "";
  }
  resetForm(){
    this.taskInput = "";
  }
}
