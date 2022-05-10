import { Component, OnInit } from '@angular/core';
import { FormsModule,FormControl,FormGroup } from '@angular/forms';
import { ApiserviceService } from '../shared/apiservice.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
 
  constructor(private api:ApiserviceService) { 
  
  }

  getAllStudent(){
    this.api.getStudent().subscribe((res)=>{
      this.studentData = res;
  })
  }

  ngOnInit(): void {
    this.getAllStudent()
  }

  studentInfo = new FormGroup({
    Name:new FormControl(''),
    Div:new FormControl(''),
    Rollno:new FormControl(''),
    EmailId:new FormControl('')
  })


  // studentArray = [
  //   new Student("sneha","A",7,'abc@gmail.com'),
  //   new Student("aaa","B",20,'abc@gmail.com'),
  // ]


  studentArrObj : Student = new Student();
  studentData:any;

  addStudent(){
    console.log(this.studentInfo.value)
    this.studentArrObj.Name = this.studentInfo.value.Name;
    this.studentArrObj.Div = this.studentInfo.value.Div;
    this.studentArrObj.Rollno = this.studentInfo.value.Rollno;
    this.studentArrObj.EmailId = this.studentInfo.value.EmailId;

    this.api.postStudent(this.studentArrObj).subscribe((res)=>
    {
      alert('Student added successfully');
      console.log("res",res)
      this.studentInfo.reset()
    })

    
    this.getAllStudent()
    
   

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
