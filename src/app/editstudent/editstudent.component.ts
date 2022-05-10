import { Component, OnInit } from '@angular/core';
import { FormsModule,FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../shared/apiservice.service';
import { filter ,find} from 'rxjs';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  studentId:any;
  sudInfor:any =[];
  updateStudentObj: Student = new Student();
  studentData:any;
  constructor(private activatedRoute : ActivatedRoute,private api:ApiserviceService ) { }
  updateStudentInfo(){
   return  this.api.getStudent();
  }


  studentInfo = new FormGroup({
    Name:new FormControl(''),
    Div:new FormControl(''),
    Rollno:new FormControl(''),
    EmailId:new FormControl('')
  })

  getAllStudent(){
    this.api.getStudent().subscribe((res)=>{
      this.studentData = res;
  })
  }

  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.paramMap.get("id");
    this.updateStudentInfo().subscribe((res)=>
    {
      for (let i = 0; i < res.length; i++) {
        
        if (res[i].id === parseInt(this.studentId)) {
            this.sudInfor = res[i];
           
            console.log( this.sudInfor.Name)
            this.studentInfo.controls['Name'].setValue(this.sudInfor.Name);
            this.studentInfo.controls['Div'].setValue(this.sudInfor.Div);
            this.studentInfo.controls['Rollno'].setValue(this.sudInfor.Rollno);
            this.studentInfo.controls['EmailId'].setValue(this.sudInfor.EmailId);
        }
    } 
      // console.log(res)
    });

    
    
    alert(this.studentId );
   
  }

 

updateInfo(){

  this.updateStudentObj.Name = this.studentInfo.value.Name;
  this.updateStudentObj.Div = this.studentInfo.value.Div;
  this.updateStudentObj.Rollno = this.studentInfo.value.Rollno;
  this.updateStudentObj.EmailId = this.studentInfo.value.EmailId;

  this.api.updateStudent(this.updateStudentObj,this.studentId).subscribe((res)=>{
   
    alert("updated succesfully");
    this.studentInfo.reset();
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