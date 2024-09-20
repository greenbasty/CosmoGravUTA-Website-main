import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizingGroupComponent } from './organizing-group.component';

describe('OrganizingGroupComponent', () => {
  let component: OrganizingGroupComponent;
  let fixture: ComponentFixture<OrganizingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizingGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
