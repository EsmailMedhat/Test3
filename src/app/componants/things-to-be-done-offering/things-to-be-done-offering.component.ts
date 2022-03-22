import { Component, OnInit } from '@angular/core';
import {NeedJob} from "../../models/need-job";
import {NewJob} from "../../models/new-job";
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";
import {Things} from "../../models/things";

@Component({
  selector: 'app-things-to-be-done-offering',
  templateUrl: './things-to-be-done-offering.component.html',
  styleUrls: ['./things-to-be-done-offering.component.css']
})
export class ThingsToBeDoneOfferingComponent implements OnInit {

  num = 2
  things: Things[] = [];
  thing: Things = new Things();

  constructor(private userServiceService :UserServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getThings()
  }
  getThings() {
    this.userServiceService.getThings().subscribe({
      next: response => {
        this.things = response.data
      }
    });
  }

  createThings() {
    this.userServiceService.createThing(this.thing).subscribe({
      next: response => {
        this.thing.attach = "";
        this.thing.note = "";
        this.thing.to_date = "";
        this.thing.from_date = "";
        this.thing.to_place = "";
        this.thing.type_of_service = "";
      },
      error: err => {
        console.log(err)
      }
    });
  }


  apply(temp: Things) {
    this.userServiceService.applyToSupprtThings(temp).subscribe({
      next: response => {
        alert("success apply")
      },
      error: err => {
        console.log(err)
      }
    });
  }
}
