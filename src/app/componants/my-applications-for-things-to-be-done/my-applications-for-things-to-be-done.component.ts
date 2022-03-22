import { Component, OnInit } from '@angular/core';
import {Things} from "../../models/things";
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-applications-for-things-to-be-done',
  templateUrl: './my-applications-for-things-to-be-done.component.html',
  styleUrls: ['./my-applications-for-things-to-be-done.component.css']
})
export class MyApplicationsForThingsToBeDoneComponent implements OnInit {

  num = 2
  things: Things[] = [];
  thing: Things = new Things();
  block = true;

  constructor(private userServiceService :UserServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getThings()
  }

  getThings() {
    this.userServiceService.getAllSupportMyThings().subscribe({
      next: response => {
        this.things = response.data
      }
    });
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

  updateThings(temp: Things) {
    this.userServiceService.updateSupportThing(temp).subscribe({
      next: response => {
        alert(response.msg)
      },
      error: err => {
        console.log(err)
      }
    });
  }


  delete(temp: Things) {
    this.userServiceService.deleteMySuppThings(temp).subscribe({
      next: response => {
        alert("success apply")
      },
      error: err => {
        console.log(err)
      }
    });
  }



}
