import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
inputTodo:string="";
  constructor() {}

  ngOnInit(): void {
    this.todos = [
    //   {
    //   content:'HTML & CSS',
    //   completed:false

    // },
    // {
    //   content:'React js',
    //   completed:true

    // },
    // {
    //   content:'Vue js',
    //   completed:false

    // }
  ];
  }
  toggleDone (id:number){
    this.todos.map((v,i) =>{
      if (i == id ) v.completed = !v.completed;
      return v
    })
  }
deleteTodo(id:number){
this.todos = this.todos.filter((v,i) => i !==id )
}
addTodo (){
  this.todos.push({
    content:this.inputTodo,
    completed:false
  })
  this.inputTodo="";
}
}
