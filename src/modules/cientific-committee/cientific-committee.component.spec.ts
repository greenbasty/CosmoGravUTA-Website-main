import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CientificCommitteeComponent } from './cientific-committee.component';

describe('CientificCommitteeComponent', () => {
  let component: CientificCommitteeComponent;
  let fixture: ComponentFixture<CientificCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CientificCommitteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CientificCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
