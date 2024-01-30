import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent,RegisterComponent,LoginComponent,RouterModule]
})
export class AppComponent {
  title = 'management';
  constructor(private route:Router)
  {
    this.loggedin();
  }
  sessionuser:any;
  loggedin()
  {
    this.sessionuser=localStorage.getItem("myuser");
  }

  signin()
  {
    return this.sessionuser;
  }

  logout()
  {
    localStorage.removeItem("myuser");
    this.route.navigate(['login']).then(()=>{
      location.reload();
    });
  }
}
