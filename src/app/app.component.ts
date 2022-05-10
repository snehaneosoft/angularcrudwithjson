import { Component } from '@angular/core';
import { ApiserviceService } from './shared/apiservice.service';
import {Ng2SearchPipeModule} from 'ng2-search-filter'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment29_4Demo';
  searchedKeyword:any;
  studentData:any;
  studentArrObj : Student = new Student();
  studentId:any;

  constructor(private api:ApiserviceService){

  }


  ngOnInit(): void {
    this.getAllStudent()
  }

  getAllStudent(){
    this.api.getStudent().subscribe((res)=>{
      this.studentData = res;
      this.studentId = res.id;
  })
  }


  deleteInfo(student:any){
    this.api.deleteStudent(student.id).subscribe((res)=>{
      alert("student deleted")
      this.getAllStudent();
  })
}

}

class Student{
  Name:string ='';
  Div:string='';
  Rollno:number=1;
  EmailId:string='';
  // constructor(Name:string,Div:string,Rollno:number,EmailId:string){
  //   this.Name = Name;
  //   this.Div = Div;
  //   this.Rollno=Rollno;
  //   this.EmailId=EmailId;
  // }
}