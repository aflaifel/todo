import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo
  

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',false,new Date());

    if(this.id != -1){
      console.log("inside condition on Init");
    this.todoService.retrieveTodo('Fullstack',this.id).subscribe(
      data => this.todo = data
    )
    }
  }
  saveTodo(){
    if(this.id == -1){
      //create Todo
      this.todoService.createTodo('Fullstack',this.todo)
    .subscribe(
      data => {
        console.log("the saved data is "+ data)
        this.router.navigate(['todos']);
      }
    )
     
    }
    else{
    this.todoService.updateTodo('Fullstack',this.id,this.todo)
    .subscribe(
      data => {
        console.log("the updated data is "+ data)
        this.router.navigate(['todos']);
      }
    )
    }
  }
}
