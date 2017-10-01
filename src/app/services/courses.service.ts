import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {GLOBAL} from './global';

@Injectable()
export class CoursesService {

  url = GLOBAL.coursesUrl;
  constructor(private _http: Http) { }

  getCourses() {
    return this._http.get(this.url).map(res => res.json());
  }

  searchCourse(name: String) {
    return this._http.get(this.url + '&courseName=' + name).map(res => res.json());
  }

}
