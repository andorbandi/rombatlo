import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RombuszComponent } from './rombusz.component';

describe('RombuszComponent', () => {
  let component: RombuszComponent;
  let fixture: ComponentFixture<RombuszComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RombuszComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RombuszComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
