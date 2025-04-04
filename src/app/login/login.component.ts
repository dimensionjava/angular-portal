import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { catchError, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(['/home']);
      return;
    }
  }

  public loadPrincipal(): void {
    debugger;
    this.loginService.login(this.username, this.password)
      .pipe(
        catchError((error) => {
          this.errorMessage = 'Credenciales incorrectas';
          console.error('Error en login:', error);
          // Retornamos un observable vacío para continuar el flujo
          return of(null);
        })
      )
      .subscribe({
            next: (res: HttpResponse<any> | null) => {
              if (res) {
                debugger;
                console.log('Respuesta completa:', res);
                console.log('Datos del usuario:', res.body);
                console.log('Token:', res.body?.token);
                console.log('Status:', res.status);

                // if (res.status === 200) {
                  this.router.navigate(['/home']);
                // }
              } else {
                console.log('La respuesta fue nula (posible error manejado)');
              }
            }

        ,
        complete: () => {
          this.username = '';
          this.password = '';
        }
      });
  }

}
