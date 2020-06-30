import { Injectable } from '@angular/core';
import { Idatacenter } from './data_center';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataCenterService {

  private _url: string="/assets/data/data_model.json";

  constructor(private http: HttpClient) { }
  datagetday1(): Observable<Idatacenter[]>
  {
    return this.http.get<Idatacenter[]>(this._url);
  }
}
