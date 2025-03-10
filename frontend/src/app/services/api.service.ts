import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = 'https://jdm-api.onrender.com/v1/cars/';

  constructor(public http: HttpClient) { }

  // Método para obtener los datos
  public getCarData(): Observable<any> {
    const urlGetData: string = `${this.API_URL}stats`;
    return this.http.get(urlGetData);
  }
}
