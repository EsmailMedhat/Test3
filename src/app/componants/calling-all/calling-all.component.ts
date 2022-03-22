import { Component, OnInit } from '@angular/core';
import {Loss} from "../../models/loss";
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";
import { Found } from 'src/app/models/found';

@Component({
  selector: 'app-calling-all',
  templateUrl: './calling-all.component.html',
  styleUrls: ['./calling-all.component.css']
})
export class CallingAllComponent implements OnInit {

  found: Found = new Found();
  block = true;
  loss: Loss[] = [];
  constructor(private userServiceService :UserServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getLost()
  }
  getLost() {
    this.userServiceService.getLost(0).subscribe({
      next: response => {
        console.log(response.data)
        this.loss = response.data
        console.log(this.loss)
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

  save(){
    // @ts-ignore
    this.userServiceService.createFound(this.found,document.getElementById("file").files[0]).subscribe({
      next: response => {
        console.log(response)
        alert(response.msg)
      }
    });
  }

  update(temp: Loss){
    console.log(temp)
    // @ts-ignore
    this.userServiceService.updateLost(temp,document.getElementById("file").files[0]).subscribe({
      next: response => {
        console.log(response)
        alert(response.msg)
      }
    });
  }
  delete(id: any){

    // @ts-ignore
    this.userServiceService.deleteLost(id).subscribe({
      next: response => {
        console.log(response)
        alert(response.msg)
      }
    });
  }

}
