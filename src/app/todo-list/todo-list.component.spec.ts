import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service'; // Ensure TodoService is correctly imported
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add this import for ngModel

type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodolistComponent {
  tasks: Todo[] = [];
  task: string = ''; // This will bind to the input

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((tasks: Todo[]) => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    if (this.task.trim()) {
      const newTask: Todo = {
        id: Date.now().toString(), // Simple ID based on timestamp (you can change this to a better ID)
        task: this.task,
        completed: false
      };
      this.tasks.push(newTask);
      this.task = ''; // Clear the input field
    }
  }

  removeTask(taskId: string): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
