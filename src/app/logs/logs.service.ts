import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  LOGS_API_URL = (this.platform.is('desktop')) ? 'http://localhost:3005/api/logs' : 'http://10.0.2.2:3005/api/logs'

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    public platform: Platform
  ) { }

  getLogs(): Observable<any> {
    return this.http.get(this.LOGS_API_URL, { observe: 'response' })
  }
}
