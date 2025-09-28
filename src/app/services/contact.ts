// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class Contact {
  
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactDto {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponseDto {
  success: boolean;
  message: string;
  contactId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private apiUrl = 'https://portfolioapi.prathameshbhanse.live/api/contact'; // Replace with your actual API URL
private apiUrl = `${environment.apiUrl}/contact`;
  constructor(private http: HttpClient) { }

  submitContact(contactData: ContactDto): Observable<ContactResponseDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<ContactResponseDto>(this.apiUrl, contactData, { headers });
  }
}
