import { Component, OnInit } from '@angular/core';
import {Loss} from "../../models/loss";
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-lost',
  templateUrl: './my-lost.component.html',
  styleUrls: ['./my-lost.component.css']
})
export class MyLostComponent implements OnInit {

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

}
