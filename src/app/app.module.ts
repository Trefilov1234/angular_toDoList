import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { ToDoListCompComponent } from './to-do-list-comp/to-do-list-comp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ToDoListCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [ToDoListCompComponent]
})
export class AppModule { }
