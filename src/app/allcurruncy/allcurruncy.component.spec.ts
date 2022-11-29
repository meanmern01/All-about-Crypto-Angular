import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcurruncyComponent } from './allcurruncy.component';

describe('AllcurruncyComponent', () => {
  let component: AllcurruncyComponent;
  let fixture: ComponentFixture<AllcurruncyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcurruncyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcurruncyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
