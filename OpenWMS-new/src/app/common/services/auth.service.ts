import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: any = false;
  public redirectUrl: string;
  constructor() { }
  loggin(name: string, pwd: string): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap((val) => {
        this.isLoggedIn = true;
        sessionStorage.setItem('status', this.isLoggedIn);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('pwd', pwd);
      })
    );
  }
  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('pwd');
    sessionStorage.removeItem('status');
    sessionStorage.clear();
  }
}
