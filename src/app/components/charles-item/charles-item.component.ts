import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'events';
import { Todo } from 'src/app/models/Todo';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-charles-item',
  templateUrl: './charles-item.component.html',
  styleUrls: ['./charles-item.component.css']
})
export class CharlesItemComponent implements OnInit {


  @Input() todo?: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //Set Dynamic Classes
  setClasses(){
    let classes = {
      todo: true,

      'is-complete': this.todo?.completed
    }

    return classes;
  }
  //ontoggle

  onToggle(todo: any){
    //console.log('toggle');
    todo.completed = !todo.completed;
  }

  onDelete(todo: any){
    this.deleteTodo.emit(todo);
    
  }
}
