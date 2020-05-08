import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { TODO_JPA_API_URL } from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retriveAllTodos(username){
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
    // console.log('helloWorld bean service')
  }

  deleteTodo(username, id){

    console.log('inside deleteTodo')
    return this.http.delete<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id){
    console.log('inside retrieveTodo')
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id,  todo){
    console.log('inside updateTodo()')
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`,todo);
  }

  createTodo(username,  todo){
    console.log('inside updateTodo()')
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`,todo);
  }




}
