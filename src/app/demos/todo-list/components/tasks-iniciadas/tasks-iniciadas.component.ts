import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'app-tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

  iniciadas$: Observable<any[]>

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnInit() {
    this.iniciadas$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => task.iniciado && !task.finalizado)));
  }

  onToggle(event) {
    this.taskService.Toggle(event);
  }

}
