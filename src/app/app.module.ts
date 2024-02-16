import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { LayoutContentComponent } from './pages/layout/layout-content/layout-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './pages/auth/auth.component';
// import { HomeComponent } from './pages/components/home/home.component';
// import { ContactComponent } from './pages/components/contact/contact.component';
// import { AboutComponent } from './pages/components/about/about.component';
import { ComponentsComponent } from './pages/components/components.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    LayoutContentComponent,
    AuthComponent,
    // HomeComponent,
    // ContactComponent,
    // AboutComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
