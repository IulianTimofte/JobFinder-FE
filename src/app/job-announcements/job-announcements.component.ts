import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { AnnouncementsService } from '../services/announcements.service'; 
import { Announcement } from '../models/announcements.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-announcements',
  templateUrl: './job-announcements.component.html',
  styleUrls: ['./job-announcements.component.css']
})
export class JobAnnouncementsComponent implements OnInit {
  jobAnnouncements: Announcement[] = [];
  
  
  constructor( private authenticationService: AuthenticationService, private announcementsService: AnnouncementsService, private router: Router) { }

ngOnInit(): void {
      this.announcementsService.getAllAnnounces()
        .subscribe((announcements: Announcement[]) => {
          this.jobAnnouncements = announcements;
        });
    }


     viewAnnouncementDetails(id: number): void {
      this.router.navigate(['/announcement-details', id]);
    }

    applyToAnnounce(announceId: number): void {
      const applicant = {}; // aici poți să construiești obiectul applicant
      this.announcementsService.applyToAnnounce(announceId, applicant)
        .subscribe(() => {
          // aici poți să faci orice acțiune după aplicarea cu succes
          console.log('Application successful');
        });
    }
    
}
