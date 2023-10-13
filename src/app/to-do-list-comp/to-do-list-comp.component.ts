import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list-comp',
  templateUrl: './to-do-list-comp.component.html',
  styleUrls: ['./to-do-list-comp.component.css'],
})

export class ToDoListCompComponent implements OnInit {
  todos:any;
  inputValue:any;
  selectedCase:any;
  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=>response.json()).then((json)=>(this.todos=json.slice(0,10)));
  }
  add()
  {
    console.log(this.inputValue);
    this.todos.push({title:this.inputValue});
    this.inputValue='';
  }
  onSelect(index:any)
  {
    this.selectedCase=index;
    console.log(this.selectedCase);
  }
  update()
  {
    if(this.selectedCase)
    {
      this.todos[this.selectedCase]={title:this.inputValue};
    }
  }
}
