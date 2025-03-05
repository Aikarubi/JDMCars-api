import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = 'https://jdm-api.onrender.com/v1/cars/stats';

  constructor(public http: HttpClient) { }

  // Método para obtener los datos
  getCarData(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
