import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_API_URL = 'http://localhost:3000/api/auth'

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const data = { username, password }

    return this.http.post<any>(`${this.AUTH_API_URL}/login`, data, { observe: 'response' })
  }

  signup(username: string, password: string): Observable<any> {
    const data = { username, password }

    return this.http.post<any>(`${this.AUTH_API_URL}/signup`, data, { observe: 'response' })
  }
}
