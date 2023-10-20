import { Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";

export const routes: Routes =[
    {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },

]