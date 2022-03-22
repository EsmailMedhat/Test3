import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./style1.component.css','./style2.component.css','./style3.component.css','./style4.component.css',
    './style5.component.css','./style6.component.css','./style7.component.css','./style8.component.css']
})
export class SignupComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  files:any;
  // @ts-ignore
  handleFileInput(event) {
    this.files = event.target.files[0];
    console.log(this.files)
  }
  createForm(){
    this.form = this.formbu.group({
      image: [null,Validators.required]
    })
  }
  getF(){
    return this.form.controls;
  }
  user: User = new User();
  constructor(private userServiceService :UserServiceService,private router: Router,private formbu: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  signUp() {
    this.userServiceService.createUser(this.user,this.files).subscribe({
      next: response => {
        sessionStorage.setItem("id_user",`${response.msg.id}`);
        this.router.navigateByUrl('/profile')
      },
      error: err => {
        console.log(err)
      }
    });
  }
}
