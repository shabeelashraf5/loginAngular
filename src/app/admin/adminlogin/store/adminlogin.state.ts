export interface AdminLoginState {
    loggedIn: boolean;
    error: string | null;
  }
  
  export const initialAdminLoginState: AdminLoginState = {
    loggedIn: false,
    error: null,
  };