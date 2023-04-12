import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private ngZone:NgZone, private router:Router) {}
  Google(): void {
    this.authService.doGoogleLogin().then(() => {
      this.successRedirect();
    })
    }
    successRedirect(): void {
      this.ngZone.run(() => {
        console.log("successRedirect")
        this.router.navigate(['/members'])});
  }

}
