import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'https://ovaeducativa-backend-production.up.railway.app/estudiante/registro';

    constructor(private http: HttpClient){

    }

    registrar(user:any): Observable<any>{
        return this.http.post(this.apiUrl, user);
    }
}
