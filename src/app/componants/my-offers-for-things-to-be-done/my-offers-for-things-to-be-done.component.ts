import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-my-offers-for-things-to-be-done',
  templateUrl: './my-offers-for-things-to-be-done.component.html',
  styleUrls: ['./my-offers-for-things-to-be-done.component.css']
})
export class MyOffersForThingsToBeDoneComponent implements OnInit {

  things: any[] = [];

  constructor(private userServiceService :UserServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getThings()
  }
  getThings() {
    let id = this.route.snapshot.paramMap.get('id');
    this.userServiceService.getApplySu(id).subscribe({
      next: response => {
        this.things = response.data
      }
    });
  }
  applyDone(id: any) {
    this.userServiceService.applySu("yes",id).subscribe({
      next: response => {
        this.things = response.data
      }
    });
  }
  applyDen(id: any) {
    this.userServiceService.applySu("no",id).subscribe({
      next: response => {
        this.things = response.data
      }
    });
  }
}
