import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Task } from './task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.component.html'
})
export class TodoComponent {

  @Input()
  task: Task;

  @Output()
  toggle = new EventEmitter<any>();

  cadastroForm: FormGroup;
  formResult: string = 'teste';

  adicionarTarefa(){
    this.formResult = JSON.stringify(this.cadastroForm.value);
      // this.task.nome = tarefa;
      // this.task.iniciado = false;
      // this.task.finalizado = false;

      // this.toggle.emit({
      //   task: { ...this.task }
      // });
  }
}