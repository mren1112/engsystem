import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { faculties } from 'src/app/interfaces/registers/fuculty.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FacultyService {


  constructor(private http: HttpClient) { }

  fetcFacultyAndMajor(): Observable<faculties> {
    return this.http.get<faculties>(`${environment.FACULTY_URL}`);
  }
}
