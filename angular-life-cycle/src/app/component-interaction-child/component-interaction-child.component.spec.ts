import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionChildComponent } from './component-interaction-child.component';

describe('ComponentInteractionChildComponent', () => {
  let component: ComponentInteractionChildComponent;
  let fixture: ComponentFixture<ComponentInteractionChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInteractionChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentInteractionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
