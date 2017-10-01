import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {GLOBAL} from './global';

@Injectable()
export class FeaturedService {

  url = GLOBAL.featuredUrl;
  constructor(private _http: Http) { }

  getFeatures() {

    return this._http.get(this.url).map(res => res.json());

  }
}
