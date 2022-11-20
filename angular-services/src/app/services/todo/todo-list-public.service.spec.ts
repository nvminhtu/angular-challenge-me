import { TestBed } from '@angular/core/testing';

import { TodoListPublicService } from './todo-list-public.service';

describe('TodoListPublicService', () => {
  let service: TodoListPublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListPublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
