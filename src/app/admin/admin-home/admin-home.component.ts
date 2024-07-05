import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/models/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  constructor(private auth: AuthService, private router: Router) {}
  logout() {
    this.auth.clear();
    this.router.navigateByUrl('/');
  }
}
