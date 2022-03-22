import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Financi} from "../../models/financi";

@Component({
  selector: 'app-applicant-for-financial-help',
  templateUrl: './applicant-for-financial-help.component.html',
  styleUrls: ['./applicant-for-financial-help.component.css']
})
export class ApplicantForFinancialHelpComponent implements OnInit {

  res: Financi[] =[];
  constructor(private userServiceService :UserServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getApplyersToNeedMoneyPost()
  }
  getApplyersToNeedMoneyPost() {
    let id = this.route.snapshot.paramMap.get('id');
    this.userServiceService.getApplyersToNeedMoneyPost(id).subscribe({
      next: response => {
        this.res = response.data
      }
    });
  }

  notOk() {

  }
  ok(id: any) {
    this.userServiceService.AccApplyersToNeedMoneyPost(id).subscribe({
      next: response => {
        alert("success")
      }
    });
  }
}
