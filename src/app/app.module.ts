import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppFirebaseModule } from './app-firebase.module';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './components/create/create.component';
import { FeedComponent } from './components/feed/feed.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    FeedComponent,
    HeaderComponent,
    ProfileCardComponent,
  ],
  imports: [
    AppFirebaseModule,
    AppMaterialModule,
    AppRoutingModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
