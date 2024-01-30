import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private us:UserService){
    this.getData();
  }
  formdata=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    password:new FormControl('',[Validators.required]),
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required])
  });
  
  userData:any;
  getData()
  {
    this.us.getUser().subscribe(res=>{
      this.userData=res;
      
    });
  }
  saveData(fd:any)
  {
    this.us.saveUser(fd).subscribe(res=>{
      alert("Candidate registered successfully!!");
      location.reload();
      this.getData();
      this.formdata.reset();
    });
  }
}
