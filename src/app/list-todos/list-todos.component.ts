import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message : string;
  // = [

  //   new Todo(1,'Learn spring security',false,new Date()),
  //   new Todo(2, 'Become an Expert at Angular',false,new Date()),
  //   new Todo(3,'Become full stack developer',false,new Date())
  // ]

  // todo = {
  //  id: 1,
  //  description: 'Learn to Dance' 
  // }
  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  private refreshTodos() {
    this.todoService.retriveAllTodos('Fullstack').subscribe(response => {
      console.log(response);
      this.todos = response;
    });
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('Fullstack',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} is succss`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id])
  }

  addTodo(){
    console.log('inside AddTodo()');
    this.router.navigate(['todos',-1])
  }

}
