import { Component } from '@angular/core';
import { ProfilepageService } from './profilepage.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})

export class ProfilepageComponent {
  user = {
    username: '', 
  };

  profileImageUrl: string | null = null;
  selectedProfileImage: File | null = null;

  constructor(private userService:  ProfilepageService) {}

  updateProfile() {
   
    this.userService.updateProfile(this.user, this.selectedProfileImage).subscribe(
      (response) => {
     
        console.log('Profile updated successfully', response);
      },
      (error) => {
       
        console.error('Profile update failed', error);
      }
    );
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedProfileImage = inputElement.files[0];
      this.previewProfileImage();
    }
  }

  previewProfileImage() {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.profileImageUrl = e.target?.result as string;
    };
    reader.readAsDataURL(this.selectedProfileImage!);
  }

}
