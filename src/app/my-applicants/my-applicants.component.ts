import { Component } from '@angular/core';
import { AnnouncementsService } from '../services/announcements.service';
import { MyApplicantDto } from '../models/myapplicantDto.model';

@Component({
  selector: 'app-my-applicants',
  templateUrl: './my-applicants.component.html',
  styleUrls: ['./my-applicants.component.css']
})
export class MyApplicantsComponent {
  myApplicants: MyApplicantDto[] = [];

  constructor(private announcementsService: AnnouncementsService) { }

  ngOnInit() {
    this.announcementsService.getMyApplicants()
      .subscribe(applicants => this.myApplicants = applicants);
  }

  
}
