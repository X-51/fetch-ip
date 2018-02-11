import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map'; // map method from rxjs library

@Injectable()
export class FetchService {
  
constructor(private http:Http) { }
  // Uses http.get() to load a single JSON file
  getData() {
    return this.http.get('http://httpbin.org/ip').map((res:Response) => res.json());
  }

}