import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stateshot } from './nhl66.types';
import { NHL66_API_BASE_URL, NHL66_STATESHOT_PATH } from './nhl66.consts';

@Injectable({
  providedIn: 'root'
})
export class NHL66Service {

  constructor(private _http: HttpClient) { }

  getStateshot(): Observable<Stateshot> {
    return this._http.get<Stateshot>(NHL66_API_BASE_URL + NHL66_STATESHOT_PATH);
  }

  
}
