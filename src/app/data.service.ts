import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/data";

  getMedicineData()
  {
    return this.http.get(this.url)
  }

  saveMedicineData(data:any)
  {
    return this.http.post(this.url,data);
  }

  updateMedicineData(id:any,data:any)
  {
    return this.http.put(this.url+"/"+id,data);
  }

  deleteMedicineData(id:any){
    return this.http.delete(this.url+"/"+id);
  }
}
