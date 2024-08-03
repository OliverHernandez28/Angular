import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoDirectivaComponent } from './hijo-directiva.component';

describe('HijoDirectivaComponent', () => {
  let component: HijoDirectivaComponent;
  let fixture: ComponentFixture<HijoDirectivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoDirectivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoDirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
