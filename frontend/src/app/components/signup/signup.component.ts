import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsiService } from 'src/app/utility/services/usi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  regForm!: FormGroup;
  constructor(private formBuilder : FormBuilder ,private http : HttpClient,private router:Router,private userService :UsiService) { }

  ngOnInit(): void {
    this.regForm=new FormGroup({
      username:new FormControl(null,[
        Validators.required,
       ]),
      email:new FormControl(null,[
        Validators.required,
        Validators.email,
        Validators.minLength(6),Validators.pattern("[a-zA-Z0-9]*@gmail.com")
      ]),
      password:new FormControl(null,[
        Validators.required,
      Validators.minLength(3),Validators.pattern("[a-zA-Z@_]{6,}")
    ])
    })
    }
  
    formSubmit(){
      this.userService.registerUser(this.regForm.value)
      .subscribe(res=>{
        alert("signup successfully");
        this.regForm.reset();
        this.router.navigate(['login'])
      },err=>[
        alert('Something went wrong')
      ])
     
       
     }
  

}
