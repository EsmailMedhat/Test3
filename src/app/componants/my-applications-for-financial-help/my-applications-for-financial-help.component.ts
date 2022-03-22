import { Component, OnInit } from '@angular/core';
import {Financi} from "../../models/financi";
import {UserServiceService} from "../../services/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-my-applications-for-financial-help',
  templateUrl: './my-applications-for-financial-help.component.html',
  styleUrls: ['./my-applications-for-financial-help.component.css']
})
export class MyApplicationsForFinancialHelpComponent implements OnInit {

  res: Financi[] =[];
  constructor(private userServiceService :UserServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMyApplicantForFinancialHelp()
  }
  getMyApplicantForFinancialHelp() {
    this.userServiceService.getMyApplicantForFinancialHelp().subscribe({
      next: response => {
        this.res = response.data
      }
    });
  }
  delete(id: any) {
    this.userServiceService.deleteMyApplicantForFinancialHelp(id).subscribe({
      next: response => {
        alert("success")
      }
    });
  }

}
