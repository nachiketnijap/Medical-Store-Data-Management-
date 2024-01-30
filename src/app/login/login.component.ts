import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private http:HttpClient, private route:Router){}
  formdata=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    password:new FormControl('',[Validators.required]),
    
  });

  doLogin()
  {
    this.http.get<any>("http://localhost:3000/authusers").subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.username==this.formdata.controls.username.value && a.password==this.formdata.controls.password.value
      });
      if(user){
        alert('login successfully');
        localStorage.setItem("myuser",user.username);
        this.route.navigate(['']).then(()=>{
          location.reload();
        });
      }
      else
      {
        alert('invalid credentials !!');
      }
    });
  }
}
