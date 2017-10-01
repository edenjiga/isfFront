import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { AppComponent } from './app.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { CoursesComponent } from './components/courses/courses.component';

// SERVICES
import {FeaturedService} from './services/featured.service';
import {CoursesService} from './services/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [FeaturedService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
