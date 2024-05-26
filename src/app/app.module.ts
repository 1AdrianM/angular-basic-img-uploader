import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoReviewComponent } from './components/photo-review/photo-review.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoReviewComponent,
    PhotoFormComponent,
    NavigationComponent,
    PhotoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
