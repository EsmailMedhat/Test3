import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";
import {Loss} from "../../models/loss";
import {NeedJob} from "../../models/need-job";
import {NewJob} from "../../models/new-job";

@Component({
  selector: 'app-my-application',
  templateUrl: './my-application.component.html',
  styleUrls: ['./my-application.component.css']
})

export class MyApplicationComponent implements OnInit {

  newJob: NewJob = new NewJob();
  constructor(private userServiceService :UserServiceService,private router: Router) { }
  block = true;

  ngOnInit(): void {
    this.getApp()
  }

  enableInputs(){
    this.block = !this.block;
  }
  getApp(){
    this.userServiceService.getApp().subscribe({
      next: response => {
        console.log(response.data.id)
        this.newJob=response.data
        this.newJob.summary_about_you = response.data.summary_about_you
      },error: err => {
        console.log(err)
      }
    });
  }
  update(){
    this.userServiceService.updateJob(this.newJob).subscribe({
      next: response => {
        console.log(this.newJob.id)
        console.log(this.newJob.summary_about_you)
        alert(response.msg)
      },
      error: err => {
        console.log(err)
      }
    });
  }
  delete(){
    this.userServiceService.delete(this.newJob).subscribe({
      next: response => {
        alert(response.msg)
      },
      error: err => {
        console.log(err)
      }
    });
  }

}
