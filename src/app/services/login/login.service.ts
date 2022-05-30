import { Injectable } from '@angular/core';
import { Loginform } from 'src/app/interfaces/login/loginform';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import { BehaviorSubject, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 public loginformdata: Observable<Loginform>;

  constructor(private http:HttpClient) {

   }

  getRestaurant(): Observable<Loginform> {
    console.log('get res')

    return this.http.get<Loginform>(environment.api+'/'+6206030642 ).pipe(
      map((res: Loginform) => {
        console.log('xx' +JSON.stringify(res))
        return res
      } ));


  }
}

