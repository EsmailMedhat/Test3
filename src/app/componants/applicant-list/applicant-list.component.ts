import { Component, OnInit } from '@angular/core';
import {Loss} from "../../models/loss";
import {UserServiceService} from "../../services/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProvideJob} from "../../models/provide-job";

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  num = "dummy"
  jobs: ProvideJob[] = [];
  constructor(private route: ActivatedRoute,private userServiceService :UserServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getLost()
  }
  getLost() {
    let result2 = this.route.snapshot.paramMap.get('id');
    this.userServiceService.getProvideJobs(result2).subscribe({
      next: response => {
        console.log(response)
        this.jobs = response.data
      }
    });
  }

  delete1(id:any){
    this.userServiceService.deleteApplyJob(id,"no").subscribe({
      next: response => {
        console.log(response)
      }
    });
  }
  delete2(id:any){
    this.userServiceService.deleteApplyJob(id,"yes").subscribe({
      next: response => {
        console.log(response)
      }
    });
  }
}
