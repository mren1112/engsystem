import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize, map, Observable, of, Subscription } from 'rxjs';
import { FileUploadService } from 'src/app/services/student-register/FileUpload.formData.service';

@Component({
  selector: 'app-upload-test',
  templateUrl: './upload-test.component.html',
  styleUrls: ['./upload-test.component.scss'],
})
export class UploadTestComponent implements OnInit {
  file: any;
  message = '';

  fd = new FormData();
  //multi files
  selectedFiles?: FileList;
  fileInfos?: Observable<any>;

  //File lists
  fileCitizen: any;
  fileProfile: any;
  filePayment: any;
  fileGraduate: any;
  numFile: number = 0;
  isfileCitizen: boolean = false;
  isfileProfile: boolean = false;
  isfileGraduate: boolean = false;

  constructor(
    private http: HttpClient,
    private uploadService: FileUploadService
  ) {}

  ngOnInit(): void {
    // this.fileInfos = this.uploadService.getFiles();
  }

  onFileImgProfileChanged(event: any) {
    if (!event) { return; }
    if (event.target.files.length <= 0) { return; }
    this.fileProfile = event.target.files[0];
    this.isfileProfile = true;
    console.log('file1 ' + event.target.files[0].name);
  }

  onFileImgCitizenChanged(event: any) {
    if (!event) { return; }
    if (event.target.files.length <= 0) { return; }
    this.fileCitizen = event.target.files[0];
    this.isfileCitizen = true;
    console.log('file2 ' + event.target.files[0].name);
  }

  onFileImgPaymentChanged(event: any) {
    if (!event) { return; }
    if (event.target.files.length <= 0) { return; }
    this.filePayment = event.target.files[0];
    console.log('file1 ' + event.target.files[0].name);
  }


  onFilePdfGraduateChanged(event: any) {
    if (!event) { return; }
    if (event.target.files.length <= 0) { return; }
    this.fileGraduate = event.target.files[0];
    this.isfileGraduate = true;
    console.log('file3 ' + event.target.files[0].name);
  }


  uploadFile() {

  let res;
    if (this.isfileProfile && this.isfileProfile && this.isfileGraduate) {
    if (this.fileProfile !== undefined) {
          this.fd = new FormData();
          this.fd.append('file', this.fileProfile, '555.jpg');
          this.fd.append('tagetUpload', '1');
          res =  this.uploadService.onUploadFile(this.fd);
          console.log('file1 1');
        }  if (this.fileCitizen !== undefined) {
          this.fd = new FormData();
          this.fd.append('file', this.fileCitizen);
          this.fd.append('tagetUpload', '2');
          res =  this.uploadService.onUploadFile(this.fd);
          console.log('file1 2');
        }  if (this.fileGraduate !== undefined) {
          this.fd = new FormData();
          this.fd.append('file', this.fileGraduate);
          this.fd.append('tagetUpload', '3');
          res =  this.uploadService.onUploadFile(this.fd);
          console.log('file1 3');
        }
    } else {
        alert('err');
    }




    /*const fd = new FormData();
    fd.append('file', this.file);
    fd.append('tagetUpload', '2');
    console.log('file ' + fd.get('file'));*/
    this.message = '';
    /*await this.uploadService.uploadFile(this.fd).subscribe(
      (res) => {
        this.message = res + '';
      },
      (err) => {
        console.log(err);
        this.message = 'Failed';
      }
    );*/

  }
}
