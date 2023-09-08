import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilepageService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  updateProfile(user: any, profileImage: File | null) {
    const formData = new FormData();
    formData.append('username', user.username);

    if (profileImage) {
      formData.append('profileImage', profileImage, profileImage.name);
    }

    
    return this.http.post(`${this.apiUrl}/addprofile`, formData);
  }

}
