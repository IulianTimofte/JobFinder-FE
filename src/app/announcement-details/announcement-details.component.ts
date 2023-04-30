import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementsService } from '../services/announcements.service';
import { Announcement } from '../models/announcements.model';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.css']
})
export class AnnouncementDetailsComponent implements OnInit {
  announcement!: Announcement;
  applyStatus: string | undefined;
  isApplied = false;
  isRemoveApplied = false;

  constructor(
    private route: ActivatedRoute,
    private announcementsService: AnnouncementsService
  ) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    let numericUserId: number | undefined;
    if (userId !== null && typeof userId === 'string') {
      numericUserId = parseInt(userId, 10);
    }
    console.log('Numeric user ID:', numericUserId);
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Id-ul este:', id); // afișează valoarea lui id în consolă
    if (id !== null) {
      const numericId = parseInt(id, 10);
      this.announcementsService.getAnnounceById(numericId)
        .subscribe((announcement: Announcement) => {
          this.announcement = announcement;
        });
  
      if (numericUserId !== undefined) {
        this.announcementsService.checkIfUserApplied(numericUserId, numericId)
          .subscribe((result: boolean) => {
            if (result) {
              this.isApplied = true;
            } else {
              this.isRemoveApplied = true;
            }
          });
      }
    }
  }
  

  onApply(): void {
    this.announcementsService.applyToAnnounce(this.announcement.id, {})
      .subscribe(
        () => {
          this.applyStatus = 'Ai aplicat cu succes!';
          this.isApplied = true;
        },
        (error) => {
          if (error.status === 400 && error.error === 'User already applied') {
            this.applyStatus = 'Ai aplicat deja pentru acest anunt';
          } else {
            this.applyStatus = 'A avut loc o eroare la aplicarea pentru acest anunt';
          }
        }
      );
  }

  
  onRemoveApply(): void {
    const userId = localStorage.getItem('userId');
    let numericUserId: number | undefined;
    if (userId !== null && typeof userId === 'string') {
      numericUserId = parseInt(userId, 10);
    }
    if (numericUserId !== undefined) {
    this.announcementsService.removeApply(numericUserId, this.announcement.id)
      .subscribe(
        () => {
          this.applyStatus = 'Remove was made with success';
          this.isRemoveApplied = true;
          this.isApplied = false;
        },
        (error) => {
          if (error.status === 400 && error.error === 'User has not applied') {
            this.applyStatus = 'Nu ai dat Apply pentru acest anunt!';
          } else {
            this.applyStatus = 'A avut loc o eroare la eliminarea aplicarii';
          }
        }
      );} else {
        console.error('User ID is undefined.');
      }
  }

  
}
