import { Component, OnInit } from '@angular/core';

import {FeaturedService} from './services/featured.service';
import {CoursesService} from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  featured: any[];
  courses: any[];
  numCourses: number;

  constructor(
    private _featuredService: FeaturedService,
    private _coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.getFeatures();
    this.getCourses();
  }

  getCourses() {
    this._coursesService.getCourses().subscribe(
      response => {
        this.courses = response.items;
        this.numCourses = response.totalItems;
      },
      err => {
        console.log(err);
      }
    );
  }
  getFeatures() {
    this._featuredService.getFeatures().subscribe(
      response => {
        this.featured = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  searchCourse(name) {
    this._coursesService.searchCourse(name).subscribe(
      response => {
        this.courses = response.items;
        this.numCourses = response.totalItems;
      }
    );
  }
}
