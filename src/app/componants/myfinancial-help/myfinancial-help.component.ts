import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Financi} from "../../models/financi";

@Component({
  selector: 'app-myfinancial-help',
  templateUrl: './myfinancial-help.component.html',
  styleUrls: ['./myfinancial-help.component.css']
})
export class MyfinancialHelpComponent implements OnInit {

  fins: Financi[] = [];
  block = true;
  constructor(private userServiceService :UserServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMyFinanciallHelpAsk()
  }
  enableInputs(id: any){
    let size = document.getElementsByClassName("ena"+id).length;
    // @ts-ignore
    if(this.block){
      for (let i =0;i<size;i++){
        document.getElementsByClassName("ena"+id)[i].removeAttribute('disabled')
      }
      this.block = false;
    } else {
      for (let i =0;i<size;i++){
        document.getElementsByClassName("ena"+id)[i].setAttribute('disabled',String(true))
      }
      this.block = true;
    }
    //this.block = !this.block;
  }


  getMyFinanciallHelpAsk() {
    this.userServiceService.getMyFinanciallHelpAsk().subscribe({
      next: response => {
        this.fins = response.data
      }
    });
  }

  update(fin: Financi) {
    this.userServiceService.updateMyFinanciallHelpAsk(fin).subscribe({
      next: response => {
        alert(response.msg)
      }
    });
  }
  delete(fin: Financi) {
    this.userServiceService.deleteMyFinanciallHelpAsk(fin).subscribe({
      next: response => {
        alert(response.msg)
      }
    });
  }
}
