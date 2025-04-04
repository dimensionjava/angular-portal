import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly apiUrl = 'https://dummyjson.com';
  constructor(private http: HttpClient) {  }

    login(username: string, password: string): Observable<any> {
      return this.http.post(`${this.apiUrl}/auth/login`, {
        username,
        password
      }).pipe(
        tap((response: any) => {
          // Almacenar los datos en localStorage
          localStorage.setItem('accessToken', response.accessToken); // Nota: dummyjson devuelve 'token' no 'accessToken'
          localStorage.setItem('refreshToken', response.refreshToken); // dummyjson no devuelve refreshToken en su API
          localStorage.setItem('firstName', response.firstName);
          localStorage.setItem('lastName', response.lastName);
          localStorage.setItem('email', response.email);

          // Nota: La API de dummyjson devuelve estos datos en el objeto 'user'
          if (response.user) {
            localStorage.setItem('firstName', response.user.firstName);
            localStorage.setItem('lastName', response.user.lastName);
            localStorage.setItem('email', response.user.email);
          }
        })
      );
    }

    isAuthenticated(): boolean {
      return (
        typeof window !== 'undefined' && !!localStorage.getItem('accessToken')
      );
    }
}