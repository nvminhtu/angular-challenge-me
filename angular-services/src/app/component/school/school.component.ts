import { Component, OnInit } from '@angular/core';
// sử dụng service trong 1 Component
import { LoggerService } from '../../services/logger.service';
import { TimeService } from 'src/app/services/time.service';

import { Todo, TodoListService } from 'src/app/services/todo/todo-list.service';
import { TodoListPublicService } from 'src/app/services/todo/todo-list-public.service';
import { TodoListPrivateService } from 'src/app/services/todo/todo-list-private.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss'],
  // ly do can xai dong này: bởi vì TodoListService ko khai báo ProvideIn: 'root'
  providers: [{ provide: TodoListService, useClass: TodoListPrivateService }],
  // providers: [{ provide: TodoListService, useClass: TodoListPublicService }],
})
export class SchoolComponent implements OnInit {
  // get Logger
  infoMessage: any;
  warningMessage: any;
  errorMessage: any;

  // get Time
  currentDate: string = '';
  currentTime: string = '';

  // todos
  todos: Todo[] = []; // initial the data

  constructor(
    private LoggerService: LoggerService,
    private TimeService: TimeService,
    private todoListService: TodoListService
  ) {
    // init for Log Message
    this.infoMessage = this.LoggerService.log(
      'Log Message',
      'This is a log message'
    );
    this.warningMessage = this.LoggerService.warn(
      'Warning',
      'This is a log message'
    );
    this.errorMessage = this.LoggerService.error(
      'Error Message',
      'This is a log message'
    );

    // init for Date Time Service
    this.currentDate = this.TimeService.getCurrentDate().toLocaleDateString();
    this.currentTime = this.TimeService.getCurrentDate().toLocaleTimeString();

    // init for Todos
    this.todos = this.todoListService.getTodos();
  }

  ngOnInit(): void {}
}
