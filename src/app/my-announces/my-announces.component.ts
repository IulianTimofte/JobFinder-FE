import { Component } from '@angular/core';
import { AnnouncementsService } from '../services/announcements.service';
import { Announcement } from '../models/announcements.model';
@Component({
  selector: 'app-my-announces',
  templateUrl: './my-announces.component.html',
  styleUrls: ['./my-announces.component.css']
})
export class MyAnnouncesComponent {
  announces: Announcement[] = [];

  constructor(private announcementsService: AnnouncementsService) { }

  ngOnInit(): void {
    this.announcementsService.getMyAnnounces().subscribe((announces: Announcement[]) => {
      this.announces = announces;
    });
  }
}
