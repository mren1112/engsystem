import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { throwError, forkJoin, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ThaiProvinceService {
  jsonURL = 'assets/raw_database.json';
  constructor(private http: HttpClient) {}
  getZipcode() {
    return this.http.get<any>(this.jsonURL).pipe(
      map((response: any) => {
        //console.log(response);
        return response;
      }),
      catchError((err) => {
        return err;
      })
    );
  }
}
