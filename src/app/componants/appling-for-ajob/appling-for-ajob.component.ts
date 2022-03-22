import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";
import {Loss} from "../../models/loss";
import {NeedJob} from "../../models/need-job";
import {NewJob} from "../../models/new-job";

@Component({
  selector: 'app-appling-for-ajob',
  templateUrl: './appling-for-ajob.component.html',
  styleUrls: ['./appling-for-ajob.component.css']
})
export class ApplingForAjobComponent implements OnInit {

  num = 2
  jobs: NeedJob[] = [];
  newJob: NewJob = new NewJob();

  constructor(private userServiceService :UserServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getJobs()
  }
  getJobs() {
    this.userServiceService.getApplyForJob().subscribe({
      next: response => {
        this.jobs = response.data
      }
    });
  }

  createJob() {
    this.userServiceService.createNewJob(this.newJob).subscribe({
      next: response => {
        alert(response.msg)
        this.newJob.summary_about_you = "";
        this.newJob.skills = "";
        this.newJob.certificates = "";
        this.newJob.attach = "";
        this.newJob.qualification = "";
      },
      error: err => {
        console.log(err)
      }
    });
  }

}
