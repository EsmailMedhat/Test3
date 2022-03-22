import { Component, OnInit } from '@angular/core';
import {Financi} from "../../models/financi";
import {UserServiceService} from "../../services/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-financial-help-asking',
  templateUrl: './financial-help-asking.component.html',
  styleUrls: ['./financial-help-asking.component.css']
})
export class FinancialHelpAskingComponent implements OnInit {

  fin: Financi = new Financi();
  constructor(private userServiceService :UserServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  createMyFinanciallHelpAsk() {
    this.userServiceService.createMyFinanciallHelp(this.fin).subscribe({
      next: response => {
        alert(response.msg)
        this.fin.provide_help_way=""
        this.fin.target_help=""
        this.fin.specific_address=""
        this.fin.another_user_name=""
        this.fin.value=""
        this.fin.attach=""
      }
    });
  }

  /*getMyFinanciallHelpAsk() {
    this.userServiceService.getMyFinanciallHelpAsk().subscribe({
      next: response => {
        this.fin = response.data
      }
    });
  }
  update(id: any) {
    this.userServiceService.updateMyFinanciallHelpAsk(this.fin).subscribe({
      next: response => {
        console.log(response.msg)
      }
    });
  }
  delete() {
    this.userServiceService.deleteMyFinanciallHelpAsk(this.fin).subscribe({
      next: response => {
        console.log(response.msg)
      }
    });
  }*/
  nameState: boolean = true

  selecting(v :any){
    console.log(v.target.value)
    if(v.target.value == 1){
      this.nameState = true
    }else{
      this.nameState = false
    }
  }
}
