import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAnnouncementsComponent } from './job-announcements.component';

describe('JobAnnouncementsComponent', () => {
  let component: JobAnnouncementsComponent;
  let fixture: ComponentFixture<JobAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAnnouncementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
