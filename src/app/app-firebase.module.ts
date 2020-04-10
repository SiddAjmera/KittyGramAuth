import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

@NgModule({
  imports: [AngularFireModule.initializeApp(environment.firebase)],
  exports: [AngularFireModule, AngularFireAuthModule],
})
export class AppFirebaseModule {}
