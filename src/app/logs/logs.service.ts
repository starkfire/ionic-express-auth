import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  LOGS_API_URL = 'http://localhost:3000/api/logs'

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService
  ) { }

  getLogs(): Observable<any> {
    return this.http.get(this.LOGS_API_URL, { observe: 'response' })
  }
}
