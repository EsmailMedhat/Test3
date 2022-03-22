import { Component, OnInit } from '@angular/core';
import {Loss} from "../../models/loss";
import {NeedJob} from "../../models/need-job";
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";
import {NewJob} from "../../models/new-job";

@Component({
  selector: 'app-offering-ajob',
  templateUrl: './offering-ajob.component.html',
  styleUrls: ['./offering-ajob.component.css']
})
export class OfferingAjobComponent implements OnInit {

  newJob: NeedJob = new NeedJob();
  needs: NewJob[] = [];
  num = 4
  constructor(private userServiceService :UserServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getJobs()
  }
  getJobs() {
    this.userServiceService.getNeedJobs().subscribe({
      next: response => {
        console.log(response.data)
        this.needs = response.data
      }
    });
  }
  createJob() {
    this.userServiceService.createProvideJob(this.newJob).subscribe({
      next: response => {
        alert(response.msg)
        this.newJob.required_certificates = "";
        this.newJob.required_skills = "";
        this.newJob.required_qualification = "";
        this.newJob.attach = "";
        //this.newJob. = "";
      },
      error: err => {
        console.log(err)
      }
    });
  }

}
