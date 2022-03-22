import { Component, OnInit } from '@angular/core';
import {Financi} from "../../models/financi";
import {UserServiceService} from "../../services/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-financial-help-giving',
  templateUrl: './financial-help-giving.component.html',
  styleUrls: ['./financial-help-giving.component.css']
})
export class FinancialHelpGivingComponent implements OnInit {

  type_of_help: any;
  provide_help_way: any;
  financis: Financi[] = [];
  constructor(private userServiceService :UserServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGiv()
  }
  filterGiv(){
    this.userServiceService.filterGiv(this.type_of_help,this.provide_help_way).subscribe({
      next: response => {
        this.financis = response.data
      }
    });
  }
  getGiv() {
    this.userServiceService.getGiv().subscribe({
      next: response => {
        this.financis = response.data
      }
    });
  }

  help(id: any) {
    this.userServiceService.helpGiv(id).subscribe({
      next: response => {
        alert("Success")
      }
    });
  }
}
