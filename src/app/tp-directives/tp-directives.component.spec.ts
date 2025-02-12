import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPDirectivesComponent } from './tp-directives.component';

describe('TPDirectivesComponent', () => {
  let component: TPDirectivesComponent;
  let fixture: ComponentFixture<TPDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TPDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TPDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
