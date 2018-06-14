import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiuyanComponent } from './liuyan.component';

describe('LiuyanComponent', () => {
  let component: LiuyanComponent;
  let fixture: ComponentFixture<LiuyanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiuyanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiuyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
