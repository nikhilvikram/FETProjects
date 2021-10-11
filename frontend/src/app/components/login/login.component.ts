import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsiService } from 'src/app/utility/services/usi.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder:FormBuilder,private http : HttpClient,private router:Router,private userService :UsiService ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
     
      email:new FormControl('',[
        Validators.required,
        Validators.email,
        Validators.minLength(6),Validators.pattern("[a-zA-Z0-9]*@gmail.com")
      ]),
      password:new FormControl('',[
        Validators.required,
      Validators.minLength(3)
      // ,Validators.pattern("[a-zA-Z@_]{6,}")

    ])
   
     })
  }
  formSubmit(){
    // this.http.get<any>("http://localhost:3000/users")
    this.userService.loginUser().subscribe(res=>{
     const user=res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate([''])
      }else{
        alert("User not found!")
      }
    },err=>{
      alert("Something went wrong!!")
    })
    
    
  }


}
