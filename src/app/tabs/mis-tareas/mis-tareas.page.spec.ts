import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisTareasPage } from './mis-tareas.page';

describe('MisTareasPage', () => {
  let component: MisTareasPage;
  let fixture: ComponentFixture<MisTareasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
