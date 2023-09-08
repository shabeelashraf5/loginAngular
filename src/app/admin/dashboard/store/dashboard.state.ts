export interface User {
    
    _id: string;
    fname: string;
    lname: string;
    email: string;
    password: string;
  }
  
  export interface DashboardState {
    users: User[];
  }
  
  export const initialDashboardState: DashboardState = {
    users: [],
  };
  