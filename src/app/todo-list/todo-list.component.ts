import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class TodolistComponent {
  task = new FormControl(''); // Form control for the input field
  tasks: string[] = []; // Array to store tasks

  addTask() {
    const newTask = this.task.value?.trim(); // Get and trim input value

    if (newTask) {
      this.tasks.push(newTask); // Add task to the list
      this.task.setValue(''); // Clear the input field
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1); // Remove task from the list
  }
}
