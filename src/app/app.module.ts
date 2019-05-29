import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputsNumForImgComponent } from './inputs-num-for-img/inputs-num-for-img.component';
import { DisplayImgComponent } from './display-img/display-img.component';
import {FormsModule} from '@angular/forms';
import { DisplayStudentsComponent } from './display-students/display-students.component';
import { DisplayTeachersComponent } from './display-teachers/display-teachers.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import {Routes} from '@angular/router';
import { AuthGuard } from './auth.guard';
import {RouterModule} from '@angular/router'


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user', component: UserComponent ,canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    InputsNumForImgComponent,
    DisplayImgComponent,
    DisplayStudentsComponent,
    DisplayTeachersComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(rootRouterConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
