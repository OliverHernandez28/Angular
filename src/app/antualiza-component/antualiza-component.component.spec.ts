import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntualizaComponentComponent } from './antualiza-component.component';

describe('AntualizaComponentComponent', () => {
  let component: AntualizaComponentComponent;
  let fixture: ComponentFixture<AntualizaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AntualizaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntualizaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
