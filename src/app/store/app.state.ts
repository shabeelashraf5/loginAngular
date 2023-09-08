import { LoginState } from "../users/login/store/login.state";
import { UserState } from "../users/signup/store/signup.state";

import { userReducer } from "../users/signup/store/signup.reducer"
import { loginReducer } from "../users/login/store/login.reducer"
import { DashboardState } from "../admin/dashboard/store/dashboard.state";
import { dashboardReducer } from "../admin/dashboard/store/dashboard.reducer";
import { AdminLoginState } from "../admin/adminlogin/store/adminlogin.state";
import { adminLoginReducer } from "../admin/adminlogin/store/adminlogin.reducer";



export interface Appstate {

    user: UserState,
    login: LoginState
    users: DashboardState
    adminlogin: AdminLoginState


}


export const appReducer = {

    user: userReducer, 
    login: loginReducer,
    users: dashboardReducer,
    adminlogin: adminLoginReducer
}