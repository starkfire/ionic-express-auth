import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_API_URL = (this.platform.is('desktop')) ? 'http://localhost:3005/api/auth' : 'http://10.0.2.2:3005/api/auth'

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    public platform: Platform
  ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token')

    return !this.jwtHelper.isTokenExpired(token)
  }

  public getToken(): string {
    const token = localStorage.getItem('token')
    return token
  }

  login(username: string, password: string): Observable<any> {
    const data = { username, password }

    return this.http.post<any>(`${this.AUTH_API_URL}/login`, data, { observe: 'response' })
  }

  signup(username: string, password: string): Observable<any> {
    const data = { username, password }

    return this.http.post<any>(`${this.AUTH_API_URL}/signup`, data, { observe: 'response' })
  }
}
