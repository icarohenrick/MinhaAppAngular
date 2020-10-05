import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

  ToDoList$: Observable<any[]>
  subscription: Subscription;

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnInit() { 
    this.ToDoList$ = this.store.getTodoList().pipe(
      map(todolist => todolist.filter(task => !task.finalizado && !task.iniciado)));

      this.subscription = this.taskService.getToDoList$.subscribe();
  }

  onToggle(event) {
    this.taskService.Toggle(event);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
