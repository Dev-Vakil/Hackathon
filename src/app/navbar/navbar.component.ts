import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggedIn: Boolean = this.authService.isLoggedIn();
  // loggedIn: Boolean = true;

  constructor(private authService:AuthenticationService) {}

  logout(){
    this.loggedIn = false;
    this.authService.logout();
  }
  
}
