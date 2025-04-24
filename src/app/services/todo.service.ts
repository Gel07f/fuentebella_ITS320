import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3002/api/todos'; // Your backend URL

  constructor(private http: HttpClient) {}

  // Get all todos
  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Create a new todo
  createTodo(task: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { task });
  }

  // Delete a todo
  deleteTodo(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
