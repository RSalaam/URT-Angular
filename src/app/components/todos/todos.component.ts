import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Create first Angular App',
        completed: false
      },
      {
        content: 'Save to GitHub repository',
        completed: false
      } 
    ]
  }

  toggleDone(id: number) {
    this.todos.map((value, index) => {
      if (index === id) {
        value.completed = !value.completed;
      }
      return value;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((value, index) => index !== id)
  }

  addTodo() {
    this.todos.push({
      content:this.inputTodo,
      completed:false
    })

    this.inputTodo = "";
  }

}
