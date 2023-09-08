import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers, createUser, updateUser, deleteUser } from './store/dashboard.action';
import { DashboardState } from './store/dashboard.state';
import { DashboardService } from './dashboard.service';
import { User } from './store/dashboard.state';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  userRecords: User[] = [];

  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  editingRecord: User | null = null;
  newRecord: User = {
    _id: '',
    fname: '',
    lname: '',
    email: '',
    password: ''
  };

  newUser: User = {
    _id: '', // You may need to handle this differently, such as generating a unique ID on the server
    fname: '',
    lname: '',
    email: '',
    password: ''
  };

  editingUser: User = { // Declare the editingUser property
    _id: '',
    fname: '',
    lname: '',
    email: '',
    password: ''
  };

  userToEdit: Partial<User> = {};

  constructor(
    private store: Store<DashboardState>,
    private dashboardService: DashboardService
  ) {}


 ngOnInit(): void {
  console.log('Before dispatching loadUsers');
  this.store.dispatch(loadUsers());

  this.store.select((state) => state.users).subscribe((users) => {
    console.log('Received users:', users);
    this.userRecords = users;
  });

  console.log('After dispatching loadUsers');
}
  

  

get filteredRecords() {
  const searchTermLower = this.searchTerm.toLowerCase();
  return this.userRecords.filter(record =>
    record.fname.toLowerCase().includes(searchTermLower) ||
    record.lname.toLowerCase().includes(searchTermLower) ||
    record.email.toLowerCase().includes(searchTermLower) ||
    record.password.toLowerCase().includes(searchTermLower)
  );
}

  get pages() {
    const pageCount = Math.ceil(this.filteredRecords.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  addRecord(formData: any) {
    console.log('Form submitted with data:', formData);
    this.store.dispatch(createUser({
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      password: formData.password,
    }));
  }

  editUsers(user: Partial<User>) {
    this.userToEdit = { ...user }; // Copy the user details to the userToEdit object
  }

  editUser(user: Partial<User>) {
    this.store.dispatch(updateUser({ user }));
  }




  deleteRecord(recordId: string) {
    
    this.store.dispatch(deleteUser({ userId: recordId }));
  }

  changePage(page: number) {
    this.currentPage = page;
  }

}
