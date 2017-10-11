import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { NewheaderComponent } from './newheader/newheader.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: DashboardComponent },
    { path: 'signup',  component: SignupComponent},
    { path: 'login',   component: LoginComponent },
    { path: 'footer',  component: FooterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

 const routing: ModuleWithProviders = RouterModule.forRoot(routes);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SignupComponent,
    NewheaderComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
