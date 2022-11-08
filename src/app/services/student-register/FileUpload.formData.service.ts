import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { faculties } from 'src/app/interfaces/registers/fuculty.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {



  constructor(private http: HttpClient) { }

  onUploadFile(fd: FormData) {
    return this.http.post(`${environment.FILE_UPLOAD_URL}/upload`, fd).subscribe(res =>{
        //this.message = res + '';
      console.log(JSON.stringify(res));
    },
    (err) => {
      console.log(err);
     // this.message = 'Failed';
    }

    );
  }

   uploadFile(fd: FormData) {
    return this.http.post(`${environment.FILE_UPLOAD_URL}/upload`, fd);
  }


 getFiles(): Observable<any> {
    return this.http.get(`${environment.FILE_UPLOAD_URL}/upload`);
  }


 /*  uploadFile(): Observable<faculties> {
    return this.http.get<faculties>(`${environment.FILE_UPLOAD_URL}`);
  }

 public upload(formData: any) {
    return this.http.post<any>(`${environment.FILE_UPLOAD_URL}`, formData, {
        reportProgress: true,
        observe: 'events'
      });
  }

  uploadfile(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const request = new HttpRequest('POST', `${environment.FILE_UPLOAD_URL}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(request);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${environment.FILE_UPLOAD_URL}`);
    }

*/

}
