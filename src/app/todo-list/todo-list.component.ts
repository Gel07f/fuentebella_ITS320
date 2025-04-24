import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true, 
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  task: string = '';
  tasks: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    console.log('TodoListComponent loaded');
    this.fetchTasks(); // Load all todos when component initializes
  }

  // Fetch all tasks from the backend
  fetchTasks() {
    this.todoService.getTodos().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  // Add a new task
  addTask() {
    if (this.task.trim()) {
      this.todoService.createTodo(this.task).subscribe(
        (newTask) => {
          this.tasks.push(newTask); // Add the new task to the list
          this.task = ''; // Clear the input field
        },
        (error) => {
          console.error('Error adding task', error);
        }
      );
    }
  }

  // Remove a task by its MongoDB _id
  removeTask(id: string) {
    this.todoService.deleteTodo(id).subscribe(
      () => {
        this.tasks = this.tasks.filter(task => task._id !== id); // Use _id instead of id
      },
      (error) => {
        console.error('Error deleting task', error);
      }
    );
  }
}
