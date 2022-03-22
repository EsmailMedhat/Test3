import { Component, OnInit } from '@angular/core';
import {Loss} from "../../models/loss";
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";
import {Found} from "../../models/found";

@Component({
  selector: 'app-calling',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.css']
})
export class CallingComponent implements OnInit {

  loss: Loss[] = [];
  lost: Loss = new Loss();
  constructor(private userServiceService :UserServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getLost()
  }
  getLost() {
    this.userServiceService.getLost(1).subscribe({
      next: response => {
        this.loss = response.data
      }
    });
  }

  save(){
    // @ts-ignore
    this.userServiceService.createLost(this.lost,document.getElementById("file").files[0]).subscribe({
      next: response => {
        alert(response.msg)
      }
    });
  }
}
