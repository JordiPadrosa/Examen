import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixaComponent } from './fixa.component';

describe('FixaComponent', () => {
  let component: FixaComponent;
  let fixture: ComponentFixture<FixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
