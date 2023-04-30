// import { Component, OnInit } from '@angular/core';
// import { AnnouncementsService } from '../services/announcements.service';
// import { Announcement } from '../models/announcement.model';
// import { AuthenticationService } from './../services/authentication.service';

// @Component({
//   selector: 'app-home-page',
//   templateUrl: './home-page.component.html',
//   styleUrls: ['./home-page.component.css']
// })
// export class HomePageComponent implements OnInit {
//   announcements: Announcement[] = [];

//   constructor(private announcementsService: AnnouncementsService, private authenticationService: AuthenticationService) { }

//   ngOnInit(): void {
//     this.announcementsService.getAllAnnounces()
//       .subscribe((announcements: Announcement[]) => {
//         this.announcements = announcements;
//       });
//   }
//   logout(): void {
//     this.authenticationService.logout();
//   }
// }

