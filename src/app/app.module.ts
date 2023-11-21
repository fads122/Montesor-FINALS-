import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environment/environment';
// import { FirebaseService } from './services/firebase.service';




const routes : Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'post-list', component: PostListComponent},
  { path: 'post-add', component: PostEditComponent},
  { path: 'authentication', component: AuthComponent},
  { path: 'post-edit/:index', component: PostEditComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    PostComponent,
    PostListComponent,
    PostEditComponent,
    HomeComponent,
    ServiceComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBjAbdwCUe4w3ubimXtnovIKYU6K1-qAig",
      authDomain: "firecrud-2ee77.firebaseapp.com",
      databaseURL: "https://firecrud-2ee77-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "firecrud-2ee77",
      storageBucket: "firecrud-2ee77.appspot.com",
      messagingSenderId: "452447375053",
      appId: "1:452447375053:web:c422df9a1a296c4c85a384"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
