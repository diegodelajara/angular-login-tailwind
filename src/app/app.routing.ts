import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent }
]

export const appRoutingProviders:any[] = []
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(routes)