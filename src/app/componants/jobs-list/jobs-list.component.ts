import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";
import {Loss} from "../../models/loss";
import {NeedJob} from "../../models/need-job";

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  num = 1
  block = true;
  need: NeedJob[] = [];

  constructor(private userServiceService :UserServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getAllMyProvideJob()
  }
  getAllMyProvideJob() {
    this.userServiceService.getAllMyProvideJob().subscribe({
      next: response => {
        console.log(response)
        this.need = response.data
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

  update(temp: NeedJob){
    this.userServiceService.updateProvideJob(temp).subscribe({
      next: response => {
        alert(response.msg)
      },
      error: err => {
        console.log(err)
      }
    });
  }

  delete(temp: NeedJob){
    this.userServiceService.deleteProvideJob(temp).subscribe({
      next: response => {
        alert(response.msg)
      },
      error: err => {
        console.log(err)
      }
    });
  }

}
