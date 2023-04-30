import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from '../models/announcements.model';
import { AnnouncementDto } from '../models/announcementDto.model';
import { MyApplicantDto } from '../models/myapplicantDto.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  private apiURL = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  getAllAnnounces(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.apiURL}/get-announces`);
  }

  getAnnounceById(id: number): Observable<Announcement> {
    return this.http.get<Announcement>(`${this.apiURL}/get-announce/${id}`);
  }

  applyToAnnounce(announceId: number, applicant: any): Observable<any> {
    return this.http.post(`${this.apiURL}/announces/${announceId}/apply`, applicant);
  }

  removeApply(userId: number, announceId: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/applicants/${userId}/${announceId}`);
  }
  

  checkIfUserApplied(userId: number, announceId: number): Observable<boolean> {
    const url = `${this.apiURL}/applicants/check-applied?userId=${userId}&announceId=${announceId}`;
    return this.http.get<boolean>(url);
  }

  getMyAnnounces(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.apiURL}/my-announces`);
  }
  
  getMyAppliedAnnounces(): Observable<AnnouncementDto[]> {
    return this.http.get<AnnouncementDto[]>(`${this.apiURL}/my-applies`);
  }
    
  getMyApplicants(): Observable<MyApplicantDto[]> {
    return this.http.get<MyApplicantDto[]>(`${this.apiURL}/myApplicants`);
  }
  
  
  
}
