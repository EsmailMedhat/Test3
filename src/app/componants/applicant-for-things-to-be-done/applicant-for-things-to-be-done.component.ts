import { Component, OnInit } from '@angular/core';
import {Things} from "../../models/things";
import {UserServiceService} from "../../services/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-applicant-for-things-to-be-done',
  templateUrl: './applicant-for-things-to-be-done.component.html',
  styleUrls: ['./applicant-for-things-to-be-done.component.css']
})
export class ApplicantForThingsToBeDoneComponent implements OnInit {

  num = 2
  things: any[] = [];

  constructor(private userServiceService :UserServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getThings()
  }
  getThings() {
    let id = this.route.snapshot.paramMap.get('id');
    this.userServiceService.getApply(id).subscribe({
      next: response => {
        this.things = response.data
      }
    });
  }
  applyDone(id: any) {
    this.userServiceService.apply("yes",id).subscribe({
      next: response => {
        this.things = response.data
      }
    });
  }
  applyDen(id: any) {
    this.userServiceService.apply("no",id).subscribe({
      next: response => {
        this.things = response.data
      }
    });
  }

}
