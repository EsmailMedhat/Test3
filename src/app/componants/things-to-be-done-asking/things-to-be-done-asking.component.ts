import { Component, OnInit } from '@angular/core';
import {Things} from "../../models/things";
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-things-to-be-done-asking',
  templateUrl: './things-to-be-done-asking.component.html',
  styleUrls: ['./things-to-be-done-asking.component.css']
})
export class ThingsToBeDoneAskingComponent implements OnInit {

  num = 2
  things: Things[] = [];
  thing: Things = new Things();

  constructor(private userServiceService :UserServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getThings()
  }
  getThings() {
    this.userServiceService.getAllThings().subscribe({
      next: response => {
        this.things = response.data
      }
    });
  }

  createThings() {
    this.userServiceService.createSupThing(this.thing).subscribe({
      next: response => {
        this.thing.note = "";
        this.thing.from_place = "";
        this.thing.to_place = "";
        this.thing.date=""
        alert(response.msg)
      },
      error: err => {
        console.log(err)
      }
    });
  }


  apply(temp: Things) {
    this.userServiceService.applyToThings(temp).subscribe({
      next: response => {
        alert("success apply")
      },
      error: err => {
        console.log(err)
      }
    });
  }

}
