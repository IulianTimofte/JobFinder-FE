import { Component } from '@angular/core';
import { AnnouncementDto } from '../models/announcementDto.model';
import { AnnouncementsService } from '../services/announcements.service';


@Component({
  selector: 'app-my-applies',
  templateUrl: './my-applies.component.html',
  styleUrls: ['./my-applies.component.css']
})
export class MyAppliesComponent {

  myAppliedAnnounces: AnnouncementDto[] = [];


  constructor(private announcementService: AnnouncementsService) { }

  ngOnInit() {
    this.announcementService.getMyAppliedAnnounces().subscribe(
      (announces) => {
        this.myAppliedAnnounces = announces;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

}
