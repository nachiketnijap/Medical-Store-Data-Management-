import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { FormControl,Validators,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgxPaginationModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dt:DataService){
    this.getData();
  }

  //pagination
  srch:any;
  p:number=1;
  

  medicineData:any;
  getData()
  {
    this.dt.getMedicineData().subscribe(res=>{
      this.medicineData=res;
    });
  }

  

  saveData(dt :any)
    {
      this.dt.saveMedicineData(dt).subscribe(res=>{
        alert("Medicine added successfully");
        location.reload();
        this.getData();
        this.formdata.reset();
      });
    }

    formdata=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      expiryDate:new FormControl(''),
      price:new FormControl('',[Validators.required,Validators.maxLength(10)])
    });

    get name(){
      return this.formdata.controls.name;
    }
    get price(){
      return this.formdata.controls.price;
    }

    

    medicineId:any;
    editData(x:any)
    {
      this.medicineId=x.id;
      this.formdata.controls.name.setValue(x.name);
      this.formdata.controls.expiryDate.setValue(x.expiryDate);
      this.formdata.controls.price.setValue(x.price);
    }

    Update()
    {
    this.dt.updateMedicineData(this.medicineId,this.formdata.value).subscribe(res=>{
      this.getData();
      location.reload();
      this.formdata.reset;
    });
    }

    deleteData(id:any)
    {
      this.dt.deleteMedicineData(id).subscribe(res=>{
        alert("Deleted Successfully");
        this.getData();
      });
    }
}
