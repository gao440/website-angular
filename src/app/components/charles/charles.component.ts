import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-charles',
  templateUrl: './charles.component.html',
  styleUrls: ['./charles.component.css']
})
export class CharlesComponent implements OnInit {
  charle?:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.charle = todos;
    });
  }
  deleteTodo (todo:Todo){
    // Remove From UI
    this.charle = this.charle?.filter(t => t.id !== todo.id);
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  // add todo
  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.charle?.push(todo);
    });
  }
}
